import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  grayBoldShadow,
  magentaBoldShadow,
  purpleBoldShadow,
  skyBlueBoldShadow,
  whiteBoldShadow,
} from 'src/common/fontShadow';
import { Typography } from 'src/components';
import { GradientTypography } from 'src/components/GradientTypography';
import { SpectrumText } from 'src/components/SpectrumText';
import { customColor } from 'src/constants';
import styled from 'styled-components';
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

  const isVisible = useInView(targetRef);

  const INTRO_SECTION_PAGE_HEIGHT = '400vh';

  const SCROLL_OFFSET = {
    CONTAINER_SCALE: [0, 0.25],
    CONTAINER_Y: [0, 0.25],
    TITLE_OPACITY: [0.1875, 0.25],
    INTRO_OPACITY: [0.125, 0.225],
    NAME_OPACITY: [0.25, 0.625, 1],
    NAME_SCALE: [0.25, 0.625, 1],
    // NAME_Y_POSITION: [0.25, 0.375],
    INTEREST_SCALE: [0.375, 0.625, 1],
    INTEREST_OPACITY: [0.375, 0.625, 1],
    DIA_OPACITY: [0.625, 1],
  };

  // 스크롤 확인용 코드
  // useEffect(() => {
  //   return scrollYProgress.onChange(lastest => {
  //     console.log(lastest);
  //   });
  // }, []);

  const containerScale = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.CONTAINER_SCALE,
    [1, 1.2],
  );

  const containerY = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.CONTAINER_Y,
    [1, -40],
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

  const nameScale = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.NAME_SCALE,
    [0.3, 1, 1],
  );

  // const nameYPosition = useTransform(
  //   scrollYProgress,
  //   SCROLL_OFFSET.NAME_Y_POSITION,
  //   [20, 0],
  // );

  const InterestScale = useTransform(
    scrollYProgress,
    SCROLL_OFFSET.INTEREST_SCALE,
    [0.3, 1, 1],
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
      <Welcome style={{ scale: containerScale, y: containerY }}>
        <motion.ul
          style={{
            opacity: titleOpacity,
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          <motion.li variants={introVariants}>
            <Typography
              size="2.5rem"
              color="gray"
              fontWeight="bold"
              lineHeight={1.5}
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
              breakAll
            >
              KoJaem&apos;s&nbsp;
            </Typography>
            <Typography
              size="4rem"
              color="magenta"
              fontWeight="bold"
              fontShadow={magentaBoldShadow}
              breakAll
            >
              Exhibition
            </Typography>
          </motion.li>
        </motion.ul>
        <motion.article
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
            lineHeight={2}
            textAlign="center"
          >
            <SpectrumText
              text="저는 "
              delay={0.1}
              duration={1}
              shadow={whiteBoldShadow}
            />
            <SpectrumText
              text="프론트엔드 개발자"
              delay={0.1}
              initialDelay={0.3}
              color={customColor.skyBlue}
              duration={1}
              shadow={skyBlueBoldShadow}
            />
            <SpectrumText
              text="를 꿈꾸며 공부하는 학생입니다."
              initialDelay={1.2}
              delay={0.1}
              duration={1}
              shadow={whiteBoldShadow}
            />
          </Typography>
        </motion.article>
      </Welcome>
      <SecondIntro>
        <Name style={{ opacity: nameOpacity, scale: nameScale }}>
          <GradientTypography
            size="4rem"
            color1="purple"
            color2="magenta"
            lineHeight={1.5}
            fontWeight="bold"
            breakAll
          >
            FrontEnd
          </GradientTypography>
        </Name>
        <Interest style={{ opacity: InterestOpacity, scale: InterestScale }}>
          <Typography
            size="1.6rem"
            color="skyBlue"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign="center"
            fontShadow={skyBlueBoldShadow}
          >
            UI, UX
            <span
              style={{ color: customColor.white, textShadow: whiteBoldShadow }}
            >
              에 대해 관심이 많으며
            </span>
          </Typography>
          <Typography
            size="1.6rem"
            color="white"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign="center"
            fontShadow={whiteBoldShadow}
          >
            프론트엔드의 전반적인 기술에 대해 흥미가 있습니다
          </Typography>
        </Interest>
      </SecondIntro>
      {/* {isVisible && (
        <Dia
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.5 },
            backgroundColor: isVisible ? customColor.white : customColor.black,
          }}
          style={{ opacity: opacityZero }}
        />
      )} */}
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
  pointer-events: none;
`;

const Welcome = styled(motion.section)`
  display: flex;
  position: fixed;
  width: 100%;
  flex-direction: column;
  gap: 12px 0;
  padding: 0 20px;
  top: 10vh;

  @media screen and (min-width: 320px) {
    top: 25vh;
  }

  @media screen and (min-width: 768px) {
    top: 40vh;
  }
`;

// const Dia = styled(motion.section)`
//   position: fixed;
//   top: 90vh;
//   left: 50%;
//   width: 40px;
//   height: 40px;
//   z-index: 9;
//   transform: rotateZ(45deg);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   display: none;
//   pointer-events: auto;
//   :hover {
//     scale: 20;
//     top: 50%;
//     border-radius: 4px;
//     transform: rotateZ(0);
//     content: url('introDia.jpg');
//     object-fit: cover;
//   }
//   /* transition: all 1s; */
//   transition-property: scale, top, transform, border-radius;
//   transition-duration: 1s;

//   @media screen and (min-width: 768px) {
//     display: flex;
//   }
// `;

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

const Interest = styled(motion.article)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
