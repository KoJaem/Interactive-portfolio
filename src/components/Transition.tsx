import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
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
};

export const Transition = ({ children }: Props) => {
  const { asPath, query } = useRouter();
  // const [screenAnimation, setScreenAnimation] = useState<boolean>(false);
  const screenAni = query.screenAnimation;
  console.log(query);
  // console.log(screenAni);
  const [changePath, setChangePath] = useState<boolean>(false);
  useEffect(() => {
    setChangePath(true);
  }, [query]);
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
                // scaleX: { duration: 1, delay: 2 }
              },
              // scaleX: 0,
            }}
            // style={{originX : 'left'}}
          >
            {children}
          </motion.div>
          {screenAni && (
            <Screen
              initial={{ scaleX: 1, height: '100vh' }}
              animate={{
                scaleX: 0,
                transition: { duration: 0.5, ease: 'circOut' },
              }}
              exit={{
                scaleX: 1,
                height: ['45vh', '100vh'],
                transition: {
                  scaleX: { duration: 0.5, ease: 'circIn', delay: 0.3 },
                  height: { duration: 0.5, delay: 1.3},
                },
              }}
              style={{ originX: changePath ? 'right' : 'left' }} // 애니메이션 방향 원점 설정
            />
          )}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
`;

const Screen = styled(motion.section)`
  position: fixed;
  /* top: 0; */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5c9ea7;
  z-index: 2;
`;
