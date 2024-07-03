import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { customColorType } from 'src/constants/customColor';
import { useModal } from 'src/hooks';
import styled from 'styled-components';
import { handleColor } from './Typography';

const LangchainChatBoxModal = dynamic(() => import('./LangchainChatBoxModal'));

type Props = {
  bubbleColor: keyof customColorType;
  boxHeaderColor: keyof customColorType;
};
export const LangchainChatWindow = ({ bubbleColor, boxHeaderColor }: Props) => {
  const { isOpen, handleModal } = useModal();

  return (
    <Container isOpen={isOpen}>
      {!isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        >
          
          <IoChatbubbleEllipses
            onClick={handleModal}
            size={40}
            fill={handleColor(bubbleColor)}
            cursor={'pointer'}
          />
        </motion.section>
      )}
      <AnimatePresence mode="wait">
        {isOpen && (
          <LangchainChatBoxModal
            boxHeaderColor={boxHeaderColor}
            handleModal={handleModal}
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
