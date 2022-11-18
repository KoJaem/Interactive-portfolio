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
import { ProjectSwiper } from './index';

export const Projects = () => {
  const makeSpectrumText = (data: string, index: number) => {
    return (
      <motion.p
        key={index}
        animate={{
          opacity: [0, 1],
        }}
        style={{display: 'inline', textShadow: 'white 1px 1px 5px'}}
        transition={{
          duration: 3,
          delay: 0.5 + index * 0.3,
        }}
      >
          {data}
      </motion.p>
    );
  };
  return (
    <Container>
      <Title>
        <Typography size="80" color="white">
          {Array.from('Projects').map((data, i) => makeSpectrumText(data, i))}
        </Typography>
      </Title>
        <ProjectSwiper />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.section`
  margin-bottom: 120px;
`;
