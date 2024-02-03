import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Screen } from './index';

type Props = {
  children: ReactNode;
};

export const SlideAndScreen = ({ children }: Props) => {
  return (
    <>
      <Container
        initial={{ x: '100%', height: '1000vh' }}
        animate={{ x: 0, height: '100vh', transition: { duration: 1, ease: 'easeOut' } }}
        exit={{
          height: '45vh',
          x: '-100%',
          transition: {
            height: { duration: 0.5, ease: 'circOut' },
            x: { duration: 0.5, delay: 0.8 },
          },
        }}
      >
        {children}
      </Container>
      <Screen />
    </>
  );
};

const Container = styled(motion.section)``;
