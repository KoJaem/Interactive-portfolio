import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { projects } from 'src/dummy';
import { Navigation } from 'swiper';
import { customColor } from 'src/constants';
import { useModal } from 'src/hooks';
import { PhotoModal } from './index';
import { Typography } from 'src/components';
import { MdNavigateBefore, MdNavigateNext, MdOutlineZoomOutMap } from 'react-icons/md';

type Props = {
  activeIndex: number;
  slideChange: ({ realIndex }: { realIndex: number }) => void;
};
export const ProjectSwiper = ({ activeIndex, slideChange }: Props) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Container>
      <Wrapper>
        <StyledSwiper
          slidesPerView={1}
          loop={true}
          onSlideChange={slideChange}
          spaceBetween={100}
          // pagination={{
          //   el: '.swiper_pagination',
          //   clickable: true,
          // }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Navigation]}
        >
          {projects.map((data, i) => (
            <StyledSwiperSlide key={i}>
              <Image
                src={`/imgs/projects/thumbnail/${data.thumbnail}`}
                layout="fill"
                objectFit="contain"
                alt="project"
              />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <MoreDetail onClick={handleOpenModal} aria-label='detail-project'>
          {/* <Typography size='0.8rem' color="white">자세히보기</Typography> */}
          <MdOutlineZoomOutMap color="white" size={20} />
        </MoreDetail>
        <PrevButton className="swiper-button-prev" aria-label='prev'>
          <MdNavigateBefore size={40} />
        </PrevButton>
        <NextButton className="swiper-button-next" aria-label='next'>
          <MdNavigateNext size={40} />
        </NextButton>
        <PaginationButton aria-label='page-navigation'>
          <Typography size="1rem" color="blue" fontWeight="bold">{`${
            activeIndex + 1
          } / ${projects.length}`}</Typography>
        </PaginationButton>
        <PhotoModal
          src={projects[activeIndex].imageUrl}
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
        />
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
  --imageSize: min(80vw, 80vh);
  width: var(--imageSize);
  height: var(--imageSize);
  padding: 16px;
  gap: 8px;
  background-color: transparent;
  box-shadow: 2px 2px 4px ${customColor.skyBlue};
  border-radius: 4px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const ButtonCss = css`
  position: absolute;
  top: 50%;
  z-index: 99;
  background-color: ${customColor.white}80;
  --swiper-theme-color: ${customColor.magenta};
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
  --swiper-theme-color: ${customColor.blue};
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }
`;

const MoreDetail = styled.button`
  position: absolute;
  bottom: 8px;
  right: 20px;
  padding: 2px;
  border-radius: 4px;
  background-color: ${customColor.black}50;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;
