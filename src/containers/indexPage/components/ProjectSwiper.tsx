import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay , Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';

export const ProjectSwiper = () => {
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
            // pauseOnMouseEnter: true,
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
                src={data.url}
                layout="fill"
                alt="project"
                style={{ borderRadius: '50px', overflow: 'hidden' }}
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
    padding: 40px 0 200px 0;
  }
  @media all and (min-width: 1023px) {
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
  text-align: center;
  font-size: 18px;
  width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
