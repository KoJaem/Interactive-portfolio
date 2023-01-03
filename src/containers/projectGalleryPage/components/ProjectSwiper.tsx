import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';
import { Navigation, Pagination } from 'swiper';

export const ProjectSwiper = () => {
  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          slidesPerView={1}
          loop={true}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          // navigation={{
          //   nextEl: '.swiper-button-prev',
          //   prevEl: '.swiper-button-next',
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          // breakpoints={{
          //   1024: {
          //     coverflowEffect: {
          //       rotate: 20,
          //       depth: -80,
          //     },
          //   },
          // }}
        >
          {projects.map((data, i) => (
            <StyledSwiperSlide key={i}>
              <Image
                src={data.url}
                layout="fill"
                alt="project"
                style={{ borderRadius: '24px', overflow: 'hidden' }}
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
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.section`
  display: flex;
  --imageSize: 80vw;
  width: var(--imageSize);
  height: var(--imageSize);
  max-width: 320px;
  max-height: 320px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

