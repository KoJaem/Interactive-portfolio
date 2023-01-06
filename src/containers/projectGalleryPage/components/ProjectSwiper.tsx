import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { projects } from 'src/dummy/projectUrls';
import { Navigation, Pagination } from 'swiper';
import { customColor } from 'src/constants';
import { useRouter } from 'next/router';

export const ProjectSwiper = () => {
  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          slidesPerView={1}
          loop={true}
          spaceBetween={100}
          pagination={{
            el: '.swiper_pagination',
            clickable: true,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Pagination, Navigation]}
        >
          <PrevButton className="swiper-button-prev">이전</PrevButton>
          <NextButton className="swiper-button-next">다음</NextButton>
          <PaginationButton className="swiper_pagination"></PaginationButton>
          {projects.map((data, i) => (
            <StyledSwiperSlide key={i}>
              <Image
                src={data.url}
                layout="fill"
                alt="project"
                style={{ borderRadius: '24px' }}
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
  padding: 20px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const ButtonCss = css`
  position: absolute;
  top: '50%';
  z-index: 999;
  background-color: ${customColor.white};
  --swiper-theme-color: green; // Todo 컬러 변경
  width: 60px;
  height: 60px;
  border-radius: 999px;
  ::after {
    display: none;
  }
`;

const PrevButton = styled.button`
  ${ButtonCss};
  left: 0;
`;

const NextButton = styled.button`
  ${ButtonCss};
  right: 0;
`;

const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  background-color: ${customColor.purple};
  --swiper-theme-color: ${customColor.skyBlue};
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }
`;