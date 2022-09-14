import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'
import styled from 'styled-components';

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
};

type Props = {
  children: ReactNode;
}

export const Transition = ({ children }: Props) => {
  const {asPath} = useRouter();
  return (
    <Container>
      <AnimatePresence initial={false} mode="wait">
        <motion.div key={asPath} variants={variants} animate="in" initial="out" exit="out">
          {children}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
`;