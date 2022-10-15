import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import styled from 'styled-components';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SwiperTest() {
  return (
    <StyledSwiper pagination navigation modules={[Pagination, Navigation]}>
      <SwiperSlideTest1>Slide 1</SwiperSlideTest1>
      <SwiperSlideTest1>Slide 2</SwiperSlideTest1>
      <SwiperSlideTest1>Slide 3</SwiperSlideTest1>
      <SwiperSlideTest1>Slide 4</SwiperSlideTest1>
      <SwiperSlideTest1>Slide 5</SwiperSlideTest1>
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const SwiperSlideTest1 = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

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
