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
                  y: activeIndex === i ? '-150px' : 0,
                }}
              >
                <ImageWrapper>
                  <Image src={data.slideImage} layout="fill" alt="project" />
                </ImageWrapper>
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
  height: 100%;
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
  gap: 8px;
  border-radius: 24px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  border-radius: 24px;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  width: 33%;
  height: 100%;
  max-width: 520px;
  overflow: visible;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: visible;
  width: 100%;
  aspect-ratio: 0.75;
  border-radius: 24px;
  overflow: hidden;
`;

const AnimationBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  filter: none !important;
`;
