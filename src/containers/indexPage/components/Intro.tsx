import React, { useEffect, useRef } from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientTypography } from 'src/components/GradientTypography';
import { SpectrumText } from 'src/components/SpectrumText';
import {
  grayBoldShadow,
  magentaBoldShadow,
  purpleBoldShadow,
  whiteBoldShadow,
} from 'src/common/fontShadow';
import { useIntersect } from 'src/hooks';
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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const { isVisible } = useIntersect({ targetRef, options: { threshold: 0 } });

  const INTRO_SECTION_PAGE_HEIGHT = '400vh';

  const SCROLL_OFFSET = {
    CONTAINER_SCALE: [0, 0.25],
    TITLE_OPACITY: [0.1875, 0.25],
    INTRO_OPACITY: [0.125, 0.1875],
    NAME_OPACITY: [0.25, 0.625, 0.875],
    NAME_Y_POSITION: [0.25, 0.375],
    INTEREST_OPACITY: [0.375, 0.625, 0.875],
    DIA_OPACITY: [0.625, 0.75],
  };

  const containerScale = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.CONTAINER_SCALE,
    [1, 1.2],
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.TITLE_OPACITY,
    [1, 0],
  );

  const introOpacity = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.INTRO_OPACITY,
    [1, 0],
  );

  const nameOpacity = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.NAME_OPACITY,
    [0, 1, 0],
  );

  const nameYPosition = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.NAME_Y_POSITION,
    [20, 0],
  );

  const InterestOpacity = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.INTEREST_OPACITY,
    [0, 1, 0],
  );

  const opacityZero = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.DIA_OPACITY,
    [1, 0],
  );

  return (
    <Container
      ref={targetRef}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ height: INTRO_SECTION_PAGE_HEIGHT }}
      variants={{
        enter: {
          transition: { staggerChildren: 0.5, staggerDirection: 1 },
        },
        exit: { transition: { staggerChildren: 0.5 } },
      }}
    >
      <Welcome style={{ scale: containerScale }}>
        <motion.ul style={{ opacity: titleOpacity, marginBottom: 20 }}>
          <motion.li variants={introVariants}>
            <Typography
              size="3rem"
              color="gray"
              fontWeight="bold"
              fontHeight="1.5"
              textAlign="center"
              fontShadow={grayBoldShadow}
            >
              Welcome to the
            </Typography>
          </motion.li>
          <motion.li
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
            variants={introVariants}
          >
            <Typography
              size="4rem"
              color="purple"
              fontWeight="bold"
              fontShadow={purpleBoldShadow}
            >
              KoJaem&apos;s&nbsp;
            </Typography>
            <Typography
              size="4rem"
              color="magenta"
              fontWeight="bold"
              fontShadow={magentaBoldShadow}
            >
              exhibition
            </Typography>
          </motion.li>
        </motion.ul>
        <motion.li
          variants={introVariants}
          style={{
            opacity: isVisible ? introOpacity : 0,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            size="1.6rem"
            color="white"
            fontWeight="bold"
            fontHeight="2"
            textAlign="center"
          >
            <SpectrumText
              text="저는 프론트엔드 개발자를 꿈꾸며 공부하는 학생입니다."
              delay={0.1}
              duration={1}
              shadow={whiteBoldShadow}
            />
          </Typography>
        </motion.li>
      </Welcome>
      <SecondIntro>
        <Name style={{ opacity: nameOpacity, y: nameYPosition }}>
          <GradientTypography
            size="4rem"
            color1="purple"
            color2="magenta"
            fontHeight="1.5"
            fontWeight="bold"
          >
            KoJaem
          </GradientTypography>
          <GradientTypography
            size="4rem"
            color1="magenta"
            color2="darkGray"
            fontWeight="bold"
            fontHeight="1.5"
          >
            (고재민)
          </GradientTypography>
        </Name>
        <Interest style={{ opacity: InterestOpacity }}>
          <Typography
            size="1.6rem"
            color="white"
            fontWeight="bold"
            fontHeight="1.5"
            textAlign="center"
            fontShadow={whiteBoldShadow}
          >
            UI, UX 에 대해 관심이 많으며
          </Typography>
          <Typography
            size="1.6rem"
            color="white"
            fontWeight="bold"
            fontHeight="1.5"
            textAlign="center"
            fontShadow={whiteBoldShadow}
          >
            프론트엔드의 전반적인 기술에 대해 흥미가 있습니다
          </Typography>
        </Interest>
      </SecondIntro>
      <Dia
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          transition: { delay: 1.5 },
          backgroundColor: isVisible ? customColor.white : customColor.black,
        }}
        style={{ opacity: opacityZero }}
      />
    </Container>
  );
};

const Container = styled(motion.section)`
  position: relative;
  width: 100%;
  background-color: ${customColor.black};
  max-width: 1178px;
  gap: 60px 0;
  display: flex;
  justify-content: center;
`;

const Welcome = styled(motion.section)`
  display: flex;
  position: fixed;
  flex-direction: column;
  gap: 12px 0;
  padding: 0 20px;
  top: 25vh;
  @media screen and (min-height: 900px) {
    top: 40vh;
  }
`;

const Dia = styled(motion.section)`
  position: fixed;
  top: 90vh;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: rotateZ(45deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;
  :hover {
    scale: 20;
    top: 50%;
    border-radius: 4px;
    transform: rotateZ(0);
    content: url('introDia.jpg');
    object-fit: cover;
  }
  /* transition: all 1s; */
  transition-property: scale, top, transform, border-radius;
  transition-duration: 1s;

  @media screen and (min-width: 767px) {
    display: flex;
  }
`;

const SecondIntro = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 25vh;
  @media screen and (min-height: 900px) {
    top: 40vh;
  }
`;

const Name = styled(motion.section)`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-height: 900px) {
    flex-direction: row;
  }
`;

const Interest = styled(motion.li)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
