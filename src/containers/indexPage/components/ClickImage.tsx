import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
type Props = {
  src: string;
};
export default function ClickImage({ src }: Props) {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    click && console.log('클릭');
  }, [click]);

  const handleClick = () => {
    setClick(!click);
    // Todo : 속도를 전부 0으로 만들어줘야함
  };

  return (
    <Container
      onClick={() => handleClick()}
      initial={{ translateX: '-50%', translateY: '-50%' }}
      animate={{
        left: click ? '50%' : undefined,
        top: click ? '15vh' : undefined,
        scale: click ? [1, 2, 1] : 1,
        transition: {
          left: { delay: 1.5, duration: 0.5 },
          top: { delay: 1.5, duration: 0.5 },
          scale: { duration: 2 },
        },
      }}
    >
      <Img alt="" src={src} layout="fill" priority />
    </Container>
  );
}

const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 320px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px;
`;

const Img = styled(Image)``;
