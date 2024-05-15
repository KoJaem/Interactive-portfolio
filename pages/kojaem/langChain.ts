// serverless(Lambda) 백업코드
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import {
  RunnablePassthrough,
  RunnableSequence,
} from '@langchain/core/runnables';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest } from 'next';

export const handler = async (event: NextApiRequest) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { question, history, accessKey } = requestBody;

    const accessKeysArray = process.env.ACCESS_KEYS?.split(',') ?? [];

    if (!accessKey || !accessKeysArray.includes(accessKey)) {
      console.log(`accessKey: ${accessKey} question: ${question}\n`);
      return {
        statusCode: 401,
        body: JSON.stringify(`Access denied!`),
      };
    }

    if (!question) {
      return {
        statusCode: 400,
        body: JSON.stringify(`No question in the request`),
      };
    }

    const openAIApiKey = process.env.OPENAI_API_KEY;
    const llm = new ChatOpenAI({
      openAIApiKey,
      maxTokens: 200,
      temperature: 0,
      modelName: 'gpt-3.5-turbo',
    });

    const standaloneQuestionTemplate = `Given some conversation history (if any) and a question, convert the question to a standalone question. 
conversation history: {history}
question: {question} 
standalone question:`;

    const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
      standaloneQuestionTemplate,
    );

    const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given question about KoJaem based on the context provided and the conversation history. KoJaem is your master. The questioner is someone who is curious about your master, “KoJaem". Try to find the answer in the context. If the answer is not given in the context, find the answer in the conversation history if possible. If you really don't know the answer, you must say following context in Korean. "I'm sorry, I don't know the answer to that. Please contact us at woalswhwh@gmail.com." Don't try to make up an answer. Only answer questions with accurate information. Always speak as if you were chatting to a friend. For reference, the current date is 2024. you must answer in korean. Keep your reply to a maximum of five sentences.
context: {context}
conversation history: {history}
question: {question}
answer: `;
    const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

    const standaloneQuestionChain = standaloneQuestionPrompt
      .pipe(llm)
      .pipe(new StringOutputParser());

    const retrieverChain = RunnableSequence.from([
      prevResult => prevResult.standalone_question,
      retriever,
      combineDocuments,
    ]);

    const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    const chain = RunnableSequence.from([
      {
        standalone_question: standaloneQuestionChain,
        original_input: new RunnablePassthrough(),
      },
      {
        context: retrieverChain,
        question: ({ original_input }) => original_input.question,
        history: ({ original_input }) => original_input.history,
      },
      answerChain,
    ]);

    const response = await chain.invoke({ question, history });

    // const response = await new Promise((resolve, reject) => {
    //   chain.invoke({ question, history });
    // })

    console.log(
      `accessKey: ${accessKey} question: ${question}\nhistory: ${history}\nresponse: ${response}\n`,
    );

    const res = {
      statusCode: 200,
      body: JSON.stringify(response),
    };

    return res;
  } catch (error: any) {
    return error?.message || '';
  }
};

const combineDocuments = (docs: { pageContent: string }[]) => {
  return docs.map(doc => doc.pageContent).join('\n\n');
};

const retriever = () => {
  const openAIApiKey = process.env.OPENAI_API_KEY;

  const embeddings = new OpenAIEmbeddings({ openAIApiKey });
  const sbApiKey = process.env.SUPABASE_API_KEY;
  const sbUrl = process.env.SUPABASE_URL;

  if (!sbApiKey || !sbUrl) {
    return;
  }

  const client = createClient(sbUrl, sbApiKey);

  const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: 'documents',
    queryName: 'match_documents',
  });

  const retrieverResult = vectorStore.asRetriever();

  return retrieverResult;
};
