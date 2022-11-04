import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';
export const TestPage = () => {
  return (
    <SwiperContainer>
      <StyledSwiper
        className="mySwiper"
        loop
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 40,
          stretch: 20,
          depth: -120,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 60,
              stretch: 40,
              depth: -120,
              modifier: 1,
              scale: 1,
              slideShadows: false,
            },
          },
          // 1371: {
          //   coverflowEffect: {
          //     rotate: 50,
          //     stretch: 40,
          //     depth: -120,
          //     modifier: 1,
          //     scale: 1,
          //     slideShadows: false,
          //   },
          // },
        }}
      >
        {projects.map((data, i) => (
          <SwiperSlideTest1 key={i}>
            <Image src={data.url} width={250} height={350} alt="project" />
          </SwiperSlideTest1>
        ))}
      </StyledSwiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  max-width: 710px;
  padding: 48px 0;
  perspective: 2000px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SwiperSlideTest1 = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 200px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;
