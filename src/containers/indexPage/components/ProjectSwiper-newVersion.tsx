import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';
import { customColor } from 'src/constants';
import { Autoplay, EffectCoverflow } from 'swiper';
import { motion } from 'framer-motion';
import { Typography } from 'src/components';
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
          // speed={1000}
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
              <AnimationBox
                animate={{
                  y: activeIndex === i ? -50 : 0,
                }}
              >
                <ImageWrapper className={activeIndex === i ? 'bottomBg' : ''}>
                  <Image
                    src={data.slideImage}
                    layout="fill"
                    alt="project"
                    style={{ borderRadius: 24 }}
                  />
                </ImageWrapper>
                {activeIndex === i && (
                  <Info
                    animate={{
                      opacity: [0.5, 1],
                      height: [0, 50],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    asdasd
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
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
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
  .bottomBg {
    background: linear-gradient(to bottom, ${customColor.black}, ${customColor.white});
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  align-self: end;
`;

const Info = styled(motion.div)`
  background-color: ${customColor.white};
`;
