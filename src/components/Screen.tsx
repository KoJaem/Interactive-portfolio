import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

export const Screen = () => {
  return (
    <Container
      initial={{ scaleX: 1, height: '100vh' }}
      animate={{
        scaleX: 0,
        originX: 'center',
        transition: { duration: 0.5, ease: 'circOut' },
      }}
      exit={{
        scaleX: 1,
        height: ['45vh', '100vh'],
        originX: 'right',
        transition: {
          scaleX: { duration: 0.5, ease: 'circIn', delay: 0.3 },
          height: { duration: 0.5, delay: 1.3 },
        },
      }}
    />
  );
}

const Container = styled(motion.section)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5c9ea7;
  z-index: 2;
`;