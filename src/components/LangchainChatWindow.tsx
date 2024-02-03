import { IoChatbubbleEllipses } from 'react-icons/io5';
import { customColorType } from 'src/constants/customColor';
import { useModal } from 'src/hooks';
import styled from 'styled-components';
import { handleColor } from './Typography';
import { LangchainChatBoxModal } from './LangchainChatBoxModal';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Props = {
  bubbleColor: keyof customColorType;
  boxHeaderColor: keyof customColorType;
};
export const LangchainChatWindow = ({ bubbleColor, boxHeaderColor }: Props) => {
  const { isOpen, handleModal } = useModal();
  const [isModalAnimating, setIsModalAnimating] = useState<boolean>(false);

  return (
    <Container isOpen={isOpen}>
      {!isOpen && !isModalAnimating && (
        <IoChatbubbleEllipses
          onClick={handleModal}
          size={40}
          fill={handleColor(bubbleColor)}
          cursor={'pointer'}
        />
      )}
      <AnimatePresence mode="wait">
        {isOpen && (
          <LangchainChatBoxModal
            boxHeaderColor={boxHeaderColor}
            handleModal={handleModal}
            setIsModalAnimating={setIsModalAnimating}
          />
        )}
      </AnimatePresence>
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
