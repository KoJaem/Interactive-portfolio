import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { projectUrls } from 'src/dummy/projectUrls';

export const Projects = () => {
  return (
    <Container>
      <StyledSwiper
        effect="cards"
        modules={[EffectCards]}
        grabCursor={true}
      >
        {projectUrls.map((data, i) => (
          <SwiperSlide key={i}>
            <Image
              style={{ borderRadius: 50 }}
              src={data}
              width={320}
              height={320}
              alt="project"
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSwiper = styled(Swiper)`
  width: 320px;
  height: 500px;
`;
