import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { projects } from 'src/dummy/projects';
import { Navigation, Pagination } from 'swiper';
import { customColor } from 'src/constants';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
type Props = {
  slideChange: ({ realIndex }: { realIndex: number }) => void;
};
export const ProjectSwiper = ({ slideChange }: Props) => {
  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          slidesPerView={1}
          loop={true}
          onSlideChange={slideChange}
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
          {projects.map((data, i) => (
            <StyledSwiperSlide key={i}>
              <Image
                src={`/imgs/projects/${data.slideImage}`}
                layout="fill"
                alt="project"
                style={{ borderRadius: '24px' }}
              />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <PrevButton className="swiper-button-prev">
          <MdNavigateBefore size={40} />
        </PrevButton>
        <NextButton className="swiper-button-next">
          <MdNavigateNext size={40} />
        </NextButton>
        <PaginationButton className="swiper_pagination" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  --imageSize: 80vw;
  width: var(--imageSize);
  height: var(--imageSize);
  max-width: 320px;
  max-height: 320px;
  padding: 16px 16px 8px 16px;
  gap: 8px;
  border-radius: 24px;
  box-shadow: 4px 4px 5px ${customColor.darkGray};
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  border-radius: 24px;
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
  top: 50%;
  z-index: 999;
  background-color: ${customColor.white};
  --swiper-theme-color: ${customColor.magenta}; // Todo 컬러 변경
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
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  --swiper-theme-color: ${customColor.skyBlue};
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }
`;
