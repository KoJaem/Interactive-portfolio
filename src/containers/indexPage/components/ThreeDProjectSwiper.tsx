import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import styled from 'styled-components';
import { EffectCoverflow, Autoplay } from 'swiper';
import Image from 'next/image';
import { projects } from 'src/dummy/projects';

export const ThreeDProjectSwiper = () => {
  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          className="mySwiper"
          loop
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={1000}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 55,
            depth: -120,
            slideShadows: false,
          }}
          breakpoints={{
            1024: {
              coverflowEffect: {
                rotate: 20,
                depth: -80,
              },
            },
          }}
        >
          {projects.map((data, i) => (
            <StyledSwiperSlide key={i}>
              <Image
                src={`/imgs/projects/${data.slideImage}`}
                layout="fill"
                alt="project"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  objectFit: 'cover',
                }}
              />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
  position: relative;
  overflow-x: hidden;
  z-index: 1;
`;

const Wrapper = styled.section`
  display: flex;
  max-width: 800px;
  > div {
    padding: 20px 0;
  }
  @media screen and (min-width: 1023px) {
    max-width: 1200px;
    /* max-width: 1400px; */
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  text-align: center;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
