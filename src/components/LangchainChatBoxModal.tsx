import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';
import { customColor } from 'src/constants';
import { customColorType } from 'src/constants/customColor';
import { useModal } from 'src/hooks';
import { formatConversationHistory } from 'src/utils';
import styled from 'styled-components';
import { object, string } from 'yup';
import { AccessKeyModal } from './AccessKeyModal';
import { ChatLoading } from './ChatLoading';
import { Typography, handleColor } from './Typography';

type Props = {
  boxHeaderColor: keyof customColorType;
  handleModal: () => void;
};
const LangchainChatBoxModal = ({ boxHeaderColor, handleModal }: Props) => {
  const [history, setHistory] = useState<Array<string>>([]);
  const { isOpen: isOpenAccessKeyModal, handleModal: handleAccessKeyModal } =
    useModal();
  const [accessKey, setAccessKey] = useState<string>();
  const [invalidAccessKey, setInvalidAccessKey] = useState<boolean>(false);

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
      if (!process.env.NEXT_PUBLIC_LAMBDA_URL || invalidAccessKey) {
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
          accessKey,
        },
      );

      setHistory(prev => [...prev, `${response}`]);
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 401:
          setHistory(prev => [
            ...prev,
            'AccessKey 가 올바르지 않습니다. 확인 후 다시 이용해주세요.',
          ]);
          setInvalidAccessKey(true);
          break;
        default:
          setHistory(prev => [
            ...prev,
            '서버가 불안정합니다. 잠시 후 다시 질문 해주세요.',
          ]);
      }
    }
  };

  const checkAccessKey = () => {
    if (accessKey) {
      return;
    }
    handleAccessKeyModal();
  };

  return (
    <ChatBoxWrapper
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 0.2, ease: 'easeInOut' } }}
      exit={{ scale: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
      style={{ transformOrigin: 'bottom right' }}
    >
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
              onClick={checkAccessKey}
              {...register('question')}
              readOnly={!accessKey}
              disabled={isSubmitting || invalidAccessKey}
            />
            <SubmitButton
              type="submit"
              disabled={isSubmitting || invalidAccessKey}
            >
              <HiOutlinePaperAirplane />
            </SubmitButton>
          </TextAreaWrapper>
        </Form>
      </FormProvider>
      {isOpenAccessKeyModal && (
        <AccessKeyModal
          boxHeaderColor={boxHeaderColor}
          handleModal={handleAccessKeyModal}
          setAccessKey={value => setAccessKey(value)}
        />
      )}
    </ChatBoxWrapper>
  );
};

const ChatBoxWrapper = styled(motion.section)`
  position: relative;
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
  height: calc(
    100% - 60px - 60px - 20px
  ); // 헤더, input, input position bottom 값들
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
  width: calc(100% - 24px);
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

export default LangchainChatBoxModal;
