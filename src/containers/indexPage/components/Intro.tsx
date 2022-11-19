import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const transition = { duration: 0.5 };

const introVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { transition },
  },
};

export const Intro = () => {
  return (
    <Container
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{
        enter: {
          transition: { staggerChildren: 0.5, staggerDirection: 1 },
        },
        exit: { transition: { staggerChildren: 0.5 } },
      }}
    >
      <Welcome>
        <motion.li variants={introVariants}>
          <Typography size="3rem" color="gray" fontWeight="bold">
            Welcome to the
          </Typography>
        </motion.li>
        <motion.li
          style={{ display: 'flex', flexWrap: 'wrap' }}
          variants={introVariants}
        >
          <Typography size="4rem" color="purple" fontWeight="bold">
            KoJaem&apos;s&nbsp;
          </Typography>
          <Typography size="4rem" color="magenta" fontWeight="bold">
            exhibition
          </Typography>
        </motion.li>
        <motion.li variants={introVariants}>
          <Typography
            size="1.6rem"
            color="white"
            fontWeight="bold"
            fontHeight="2"
          >
            저는 프론트엔드 개발자를 꿈꾸며 공부하는 학생입니다.
          </Typography>
        </motion.li>
      </Welcome>
      <Dia
        animate={{
          opacity: [0, 1],
          transition: { delay: 1.5 },
        }}
      />
    </Container>
  );
};

const Container = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25vh;
  width: 100%;
  background-color: ${customColor.black};
  max-width: 1178px;
  gap: 60px 0;
  height: 100vh;
`;

const Welcome = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  padding: 0 20px;
  @media screen and (min-width: 1040px) {
    padding: 0 60px;
  }
`;

const Dia = styled(motion.section)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  width: 40px;
  height: 40px;
  background-color: ${customColor.white};
  transform: translate(-50%, -50%) rotateZ(45deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;
