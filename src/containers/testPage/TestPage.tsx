import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { projects } from 'src/dummy/projects';
export const TestPage = () => {
  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          className="mySwiper"
          loop
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
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
            <SwiperSlideTest1 key={i}>
              <Image src={data.url} layout="fill" alt="project" />
            </SwiperSlideTest1>
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
    padding: 20px 0 200px 0;
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

const SwiperSlideTest1 = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
