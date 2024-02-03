import { IoChatbubbleEllipses } from 'react-icons/io5';
import { customColorType } from 'src/constants/customColor';
import { useModal } from 'src/hooks';
import styled from 'styled-components';
import { handleColor } from './Typography';
import { LangchainChatBoxModal } from './LangchainChatBoxModal';

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
        <LangchainChatBoxModal
          boxHeaderColor={boxHeaderColor}
          handleModal={handleModal}
        />
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
  right: 20px;
  @media screen and (min-width: 768px) {
    right: 40px;
    transform: none;
  }
`;
