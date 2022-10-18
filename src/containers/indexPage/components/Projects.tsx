import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';
import { Typography } from 'src/components';
import { motion } from 'framer-motion';

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [infoAnimation, setInfoAnimation] = useState<boolean>(false);

  const slideChange = (e: any) => {
    setActiveIndex(e.realIndex);
    setInfoAnimation(true);
  };

  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          style={{ margin: 0 }}
          effect="cards"
          cardsEffect={{
            slideShadows: false,
          }}
          loop
          onSlideChange={slideChange}
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
            </SwiperSlide>
          ))}
        </StyledSwiper>

        <Info
          onAnimationComplete={() => setInfoAnimation(false)}
          animate={{
            opacity: infoAnimation ? [1, 0] : [0, 1],
          }}
          transition={{ duration: 0.1 }}
        >
          <Typography size="20" color="white">
            {projects[activeIndex].info}
          </Typography>
        </Info>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 800px;
  align-items: center;
  justify-content: space-between;
`;

const StyledSwiper = styled(Swiper)`
  width: 320px;
  height: 500px;
`;

const Info = styled(motion.section)``;
