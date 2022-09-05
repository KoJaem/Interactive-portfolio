import { motion } from 'framer-motion';
import Image from 'next/image';
import React, {
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
// Math.floor(Math.random() * 500)
type Props = {
  src: string;
};
export const MoveImage = ({ src }: Props) => {
  const [top, setTop] = useState<number>();
  const [random, setRandom] = useState<number>();
  const [speed, setSpeed] = useState<number>();
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    // Math.random() 범위지정 : (Math.random() * (최대 - 최소)) + 최소
    const ran = Math.floor(Math.random() * 100);
    setRandom(ran);
  }, []);

  useEffect(() => {
    if (random) {
      setTop(Math.floor((random / 100) * 55 + 25)); // (random / 100) * (최대-최소) + 최소
      setSpeed(Math.floor((random / 100) * 10 + 10));
    }
  }, [random]);

  return (
    <>
      {top && (
        <Container
          animate={{
            x: 'calc(-100vw - 100% - 50px)',
            display: visible ? 'flex' : 'none',
          }}
          onAnimationComplete={() => setVisible(false)}
          transition={{ duration: speed, ease: 'linear' }}
          top={top}
          zindex={Math.floor(top)}
        >
          <MovingImg alt="" src={src} layout="fill" priority />
        </Container>
      )}
    </>
  );
};
type StyledProps = {
  top: number;
  zindex: number;
};
const Container = styled(motion.section)<StyledProps>`
  position: absolute;
  display: flex;
  left: 100vw;
  width: 100%;
  max-width: 320px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  top: ${({ top }) => `${top}vh`};
  justify-content: center;
  z-index: ${({ zindex }) => zindex};
  transform: translate(0, -50%);
  box-shadow: 4px 4px 4px;
`;

const MovingImg = styled(Image)`
  pointer-events: none;
`;