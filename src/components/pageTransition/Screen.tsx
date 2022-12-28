import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

export const Screen = () => {
    const {route} = useRouter();
    return (
      <>
        <Left
          initial={{
            scaleX: route !== '/' ? 0.5 : 0,
            height: route !== '/' ? '100vh' : 0,
          }}
          animate={{
            scaleX: 0,
            originX: 'left',
            transition: { duration: 0.5 },
          }}
          exit={{
            scaleX: 1,
            height: ['45vh', '100vh'],
            originX: 'right',
            transition: {
              scaleX: { duration: 0.5, delay: 0.2 },
              height: { duration: 0.5, delay: 1.2 },
            },
          }}
        />
        <Right
          initial={{
            scaleX: route !== '/' ? 0.5 : 0,
            height: route !== '/' ? '100vh' : 0,
          }}
          animate={{
            scaleX: 0,
            originX: 'right',
            transition: { duration: 0.5 },
          }}
          exit={{
            scaleX: 1,
            height: ['45vh', '100vh'],
            originX: 'right',
            transition: {
              scaleX: { duration: 0.5, delay: 0.2 },
              height: { duration: 0.5, delay: 1.2 },
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
  z-index: 9;
`;

const Left = styled(motion.section)`
  ${screenCss}
`;

const Right = styled(motion.section)`
  ${screenCss}
`;
