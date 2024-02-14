import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

export const ChatLoading:FC = () => {
  return (
    <Container>
      <Bubble delay="0s" />
      <Bubble delay="0.1s" />
      <Bubble delay="0.2s" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  gap: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const bubbleAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

interface BubbleProps {
  delay: string;
}

const Bubble = styled.div<BubbleProps>`
  height: 8px;
  width: 8px;
  background-color: gray;
  border-radius: 9999px; // for rounded-full
  display: inline-block;
  animation: ${bubbleAnimation} 1.5s infinite;
  animation-delay: ${props => props.delay};
`;