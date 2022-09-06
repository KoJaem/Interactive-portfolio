import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useInterval } from 'src/hooks';
import styled from 'styled-components';
// Math.floor(Math.random() * 500)
type Props = {
  src: string;
};
export const MoveImage = ({ src }: Props) => {
  const [top, setTop] = useState<number>();
  const [random, setRandom] = useState<number>();
  const [x, setX] = useState<number>(0);
  const [speed, setSpeed] = useState<number>();
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const ran = Math.floor(Math.random() * 100);
    setRandom(ran);
  }, []);

  const randomCalc = useCallback((max: number, min: number): number => {
    if (random) return Math.floor((random / 100) * (max - min) + min); // (random / 100) * (최대-최소) + 최소
    return 0;
  }, [random]);

  useEffect(() => {
    if (random) {
      setTop(randomCalc(75, 25));
      setSpeed(randomCalc(200, 100));
    }
  }, [random, randomCalc]);

  useInterval(() => {
    if(speed) setX(x => x + speed);
  }, 1000)

  return (
    <>
      {top && (
        <Container
          animate={{
            x : x && -x,
            // display: visible ? 'flex' : 'none',
          }}
          transition={{ ease: 'linear' , duration: 1}}
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
  left: 100%;
  width: 100%;
  max-width: 320px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  top: ${({ top }) => `${top}vh`};
  justify-content: center;
  z-index: ${({ zindex }) => zindex};
  transform: translate(-50%, -50%);
  box-shadow: 4px 4px 4px;
`;

const MovingImg = styled(Image)`
  pointer-events: none;
`;
