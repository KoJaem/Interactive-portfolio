import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';
import { Typography } from 'src/components';

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Container>
      <StyledSwiper
        effect="cards"
        cardsEffect={{
          slideShadows: false,
        }}
        onSlideChange={e => setActiveIndex(e.activeIndex)}
        modules={[EffectCards]}
        grabCursor={true}
      >
        {projects.map((data, i) => (
          <SwiperSlide key={i}>
            <Image
              style={{ borderRadius: 50 }}
              src={data.url}
              width={320}
              height={320}
              alt="project"
            />
            {activeIndex === i && (
              <div style={{ color: 'white' }}>{data.info}</div>
            )}
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
