import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { projects } from 'src/dummy';
import { Navigation, Pagination } from 'swiper';
import { customColor } from 'src/constants';
import { useModal } from 'src/hooks';
import { PhotoModal } from './index';
import { Typography } from 'src/components';
import { MdOutlineZoomOutMap } from 'react-icons/md';

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
                objectFit="contain"
                alt="project"
              />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <MoreImage onClick={handleOpenModal}>
          {/* <Typography size='0.8rem' color="white">자세히보기</Typography> */}
          <MdOutlineZoomOutMap color="white" size={20} />
        </MoreImage>
        {/* <PrevButton className="swiper-button-prev">
          <MdNavigateBefore size={40} />
        </PrevButton>
        <NextButton className="swiper-button-next">
          <MdNavigateNext size={40} />
        </NextButton>
        <PaginationButton className="swiper_pagination" /> */}
        {/* 프로젝트 수 많아지면 페이지네이션 없애고 아래코드로 수정하기 */}
        <PaginationButton>
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
  box-shadow: 4px 4px 5px ${customColor.skyBlue};
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
  z-index: 999;
  background-color: ${customColor.white};
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

const MoreImage = styled.button`
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
