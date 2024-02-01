import { IoChatbubbleEllipses } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import { customColor } from 'src/constants';
import { customColorType } from 'src/constants/customColor';
import { useModal } from 'src/hooks';
import styled from 'styled-components';
import { handleColor } from './Typography';

type Props = {
  bubbleColor: keyof customColorType;
  boxHeaderColor: keyof customColorType;
};
export const LangchainChatWindow = ({ bubbleColor, boxHeaderColor }: Props) => {
  const { isOpen, handleModal } = useModal();
  return (
    <Container isOpen={isOpen}>
      {!isOpen && (
        <IoChatbubbleEllipses
          onClick={handleModal}
          size={40}
          fill={handleColor(bubbleColor)}
          cursor={'pointer'}
        />
      )}
      {isOpen && (
        <ChatBoxWrapper>
          <ChatBoxHeader color={boxHeaderColor}>
            <p>KoJaem GPT</p>
            <RxCross1
              onClick={handleModal}
              size={20}
              color={`${customColor.white}`}
              cursor={'pointer'}
            />
          </ChatBoxHeader>
          <ChatBoxContent>test</ChatBoxContent>
        </ChatBoxWrapper>
      )}
    </Container>
  );
};

type StyledContainerProps = {
  isOpen?: boolean;
};

const Container = styled.section<StyledContainerProps>`
  position: fixed;
  bottom: 20px;
  /* transform: translate(-50%, 0); */
  transform: ${({ isOpen }) => (isOpen ? 'translate(50%, 0)' : 'none')};
  right: ${({ isOpen }) => (isOpen ? '50%' : '40px')};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    right: 40px;
    transform: none;
  }
`;

const ChatBoxWrapper = styled.section`
  background-color: white;
  max-width: 600px;
  max-height: 600px;
  width: 80vw;
  height: 80vh;
  border-radius: 12px;
  overflow: hidden;
`;

type StyledProps = {
  color?: keyof customColorType;
};

const ChatBoxHeader = styled.section<StyledProps>`
  background-color: ${({ color }) =>
    color ? handleColor(color) : customColor.purple};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const ChatBoxContent = styled.section`
  padding: 12px;
`;