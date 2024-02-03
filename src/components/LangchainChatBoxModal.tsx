import { IoChatbubbleEllipses } from 'react-icons/io5';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';
import { customColor } from 'src/constants';
import { customColorType } from 'src/constants/customColor';
import { useModal } from 'src/hooks';
import styled from 'styled-components';
import { Typography, handleColor } from './Typography';
import { useState } from 'react';
import { object, string } from 'yup';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formatConversationHistory } from 'src/utils';
import axios from 'axios';
import { ChatLoading } from './ChatLoading';

type Props = {
  boxHeaderColor: keyof customColorType;
  handleModal: () => void;
};
export const LangchainChatBoxModal = ({ boxHeaderColor, handleModal }: Props) => {
  const [history, setHistory] = useState<Array<string>>([]);

  const schema = object().shape({
    question: string().required(`질문을 입력해주세요`),
  });

  const formMethods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    register,
    resetField,
  } = formMethods;

  const submit = async (data: FieldValues) => {
    try {
      if (!process.env.NEXT_PUBLIC_LAMBDA_URL) {
        return;
      }
      const question = data.question;

      resetField('question');

      const formattedConversationHistory = formatConversationHistory(history);

      setHistory(prev => [...prev, `${question}`]);

      const { data: response } = await axios.post(
        process.env.NEXT_PUBLIC_LAMBDA_URL,
        {
          question,
          history: formattedConversationHistory,
        },
      );

      setHistory(prev => [...prev, `${response}`]);
    } catch (error) {
      console.log(error);
      setHistory(prev => [
        ...prev,
        '서버가 불안정합니다. 잠시 후 다시 질문 해주세요.',
      ]);
    }
  };

  return (
    <ChatBoxWrapper>
      <ChatBoxHeader color={boxHeaderColor}>
        <Typography size="1.2rem">KoJaem GPT</Typography>
        <RxCross1
          onClick={handleModal}
          size={20}
          color={`${customColor.white}`}
          cursor={'pointer'}
        />
      </ChatBoxHeader>
      <ChatBoxContent>
        <HistoryWrapper>
          {history.map((data, i) => {
            return i % 2 === 0 ? (
              <UserChatBubble key={i}>
                <Typography size="0.8rem" lineHeight={1.6}>
                  {data}
                </Typography>
              </UserChatBubble>
            ) : (
              <AIChatBubble key={i}>
                <Typography size="0.8rem" lineHeight={1.6}>
                  {data}
                </Typography>
              </AIChatBubble>
            );
          })}
          {isSubmitting && <ChatLoading />}
        </HistoryWrapper>
      </ChatBoxContent>
      <FormProvider {...formMethods}>
        <Form onSubmit={handleSubmit(submit)}>
          <TextAreaWrapper>
            <TextArea
              placeholder={
                isSubmitting
                  ? `요청중입니다... (시간이 걸릴 수 있습니다)`
                  : '고재민님에 대해 무엇이 궁금하신가요?'
              }
              {...register('question')}
              disabled={isSubmitting}
            />
            <SubmitButton type="submit" disabled={isSubmitting}>
              <HiOutlinePaperAirplane />
            </SubmitButton>
          </TextAreaWrapper>
        </Form>
      </FormProvider>
    </ChatBoxWrapper>
  );
};

const ChatBoxWrapper = styled.section`
  background-color: white;
  max-width: 600px;
  max-height: 600px;
  width: 80vw;
  height: 80vh;
  border-radius: 12px;
  /* overflow: auto; */
`;

type StyledProps = {
  color?: keyof customColorType;
};

const ChatBoxHeader = styled.section<StyledProps>`
  background-color: ${({ color }) =>
    color ? handleColor(color) : customColor.purple};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const ChatBoxContent = styled.section`
  padding: 12px;
  display: flex;
  background-color: ${customColor.white};
  height: 80%;
`;

const HistoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  overflow: auto;
`;

const UserChatBubble = styled.article`
  background-color: ${customColor.lightGray};
  width: fit-content;
  padding: 8px;
  border-radius: 12px;
  margin-right: 20%;
`;

const AIChatBubble = styled.article`
  background-color: ${customColor.lightMagenta};
  width: fit-content;
  padding: 8px;
  border-radius: 12px;
  align-self: flex-end;
  margin-left: 20%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${customColor.white};
`;

const TextAreaWrapper = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${customColor.lightGray};
  border-radius: 12px;
  padding: 8px;
  position: absolute;
  bottom: 20px;
`;

const TextArea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
`;
