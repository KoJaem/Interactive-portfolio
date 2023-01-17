import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { projects } from 'src/dummy/projects';
import { customColor } from 'src/constants';
import { Autoplay, EffectCoverflow } from 'swiper';
import { motion } from 'framer-motion';
import { Typography } from 'src/components';
import { AiFillGithub } from 'react-icons/ai';
import { FaAws, FaGithubSquare } from 'react-icons/fa';
import { GradientSvg } from './GradientSvgIcon';

const TOP_ANIMATION_POSITION = 100;
type Props = {
  // slideChange: ({ realIndex }: { realIndex: number }) => void;
};
export const ProjectSwiper2 = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slideChange = ({ realIndex }: { realIndex: number }) => {
    setActiveIndex(realIndex);
  };

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          slidesPerView="auto"
          loop
          onSlideChange={slideChange}
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          // autoplay={{
          // delay: 1500,
          // disableOnInteraction: false,
          // }}
          // speed={500}
          coverflowEffect={{
            rotate: 0,
            depth: 300,
            slideShadows: false,
          }}
          // navigation={{
          //   prevEl: '.swiper-button-prev',
          //   nextEl: '.swiper-button-next',
          // }}
          // modules={[Pagination, Navigation]}
        >
          {projects.map((data, i) => (
            <StyledSwiperSlide key={i}>
              <AnimationBox>
                <ImageWrapper
                  animate={{
                    y: activeIndex === i ? -TOP_ANIMATION_POSITION : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={`/imgs/projects/${data.slideImage}`}
                    layout="fill"
                    alt="project"
                    style={{ borderRadius: 24 }}
                  />
                </ImageWrapper>
                {activeIndex === i && (
                  <Info
                    animate={{
                      opacity: [0.5, 1],
                      height: TOP_ANIMATION_POSITION + 20,
                      bottom: [TOP_ANIMATION_POSITION, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Typography size="1rem" color="black">
                      {data.title}
                    </Typography>
                    <SlideInfo>
                      <Typography size="0.8rem" color="darkGray">
                        {data.date[0]} ~ {data.date[1]}
                      </Typography>
                      <LinkWrapper>
                        {data.link.hasOwnProperty('github') && (
                          <button onClick={() => window.open(data.link.github)}>
                            <GradientSvg
                              Icon={AiFillGithub}
                              color1={customColor.skyBlue}
                              color2={customColor.black}
                              size={40}
                              id="slideGit"
                            />
                          </button>
                        )}
                        {data.link.hasOwnProperty('githubPage') && (
                          <button onClick={() => window.open(data.link.githubPage)}>
                            <GradientSvg
                              Icon={FaGithubSquare}
                              color1={customColor.skyBlue}
                              color2={customColor.purple}
                              size={40}
                              id="githubPage"
                              direction="leftToRight"
                            />
                          </button>
                        )}
                        {data.link.hasOwnProperty('aws') && (
                          <button onClick={() => window.open(data.link.aws)}>
                            <GradientSvg
                              Icon={FaAws}
                              color1={customColor.orange}
                              color2={customColor.darkGray}
                              size={40}
                              id="aws"
                              direction="leftToRight"
                            />
                          </button>
                        )}
                      </LinkWrapper>
                    </SlideInfo>
                  </Info>
                )}
              </AnimationBox>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin: 0 0 40px 0;
  @media screen and (min-width: 488px) {
    margin: 20px 0 40px 0;
  }
  @media screen and (min-width: 768px) {
    margin: 40px 0;
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  border-radius: 24px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  border-radius: 24px;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  width: 80%;
  height: 100%;
  max-width: 400px;
  overflow: visible;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  :not(.swiper-slide-active) {
    filter: brightness(70%);
  }
`;

const AnimationBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  align-self: end;
  z-index: 2;
`;

const Info = styled(motion.div)`
  position: absolute;
  width: 100%;
  z-index: 1;
  padding-top: 28px !important;
  background-color: ${customColor.white};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SlideInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  z-index: 99;
  height: 42px;
`;
