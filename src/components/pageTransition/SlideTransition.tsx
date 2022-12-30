import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export const SlideTransition = ({ children }: Props) => {
  return (
        <Container
          exit={{
            x: '-100%',
            transition: {
              x: { duration: 1, ease: 'easeIn' },
            },
          }}
        >
          {children}
        </Container>
  );
};

const Container = styled(motion.section)``;
