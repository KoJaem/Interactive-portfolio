import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

export const Screen = () => {
  return (
    <>
      <Left
        initial={{ scaleX: 0.5, height: '100vh' }}
        animate={{
          scaleX: 0,
          originX: 'left',
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
      <Right
        initial={{ scaleX: 0.5, height: '100vh' }}
        animate={{
          scaleX: 0,
          originX: 'right',
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
    </>
  );
};

const screenCss = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5c9ea7;
  z-index: 2;
`;

const Left = styled(motion.section)`
  ${screenCss}
`;

const Right = styled(motion.section)`
  ${screenCss}
`;
