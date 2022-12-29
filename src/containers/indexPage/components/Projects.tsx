import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';
import { MoreButton, Typography } from 'src/components';
import { motion } from 'framer-motion';
import { ProjectSwiper } from './index';
import { customColor } from 'src/constants';
import { SpectrumText } from 'src/components/SpectrumText';
import { whiteBoldShadow } from 'src/common/fontShadow';
import { useRouter } from 'next/router';
type Props = {
  refs: React.MutableRefObject<null[] | HTMLElement[]>;
};
export const Projects = ({ refs }: Props) => {
  const router = useRouter();
  return (
    <Container ref={el => (refs.current[2] = el)}>
      <Title>
        <Typography size="4rem" color="white">
          <SpectrumText text="Projects" shadow={whiteBoldShadow} />
        </Typography>
      </Title>
      <ProjectSwiper />
      <ButtonWrapper>
        <MoreButton onClick={() => router.push('projectGallery')}>
          <Typography size="1.3rem" color="white" fontWeight="bold">
            More &gt;&gt;
          </Typography>
        </MoreButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.section`
  margin-bottom: 120px;
`;
const ButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  max-width: 800px;
  @media screen and (min-width: 1023px) {
    max-width: 1200px;
  }
  margin: 40px 0px;
`;
