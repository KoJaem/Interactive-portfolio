import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Screen } from './Screen';

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
};

export const Transition = ({ children }: Props) => {
  const { asPath, query } = useRouter();
  // const [screenAnimation, setScreenAnimation] = useState<boolean>(false);
  const screenAni = query.screenAnimation;
  console.log(query);

  return (
    <Container>
      <AnimatePresence mode="wait">
        <motion.div key={asPath}>
          <motion.div
            initial={{ height: '100vh', scaleX: 1, x: 0 }}
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
          </motion.div>
          {screenAni && <Screen />}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
`;
