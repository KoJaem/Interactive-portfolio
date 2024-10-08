import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import Modal from 'react-modal';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const modalStyle = {
  overlay: {
    inset: 0,
    backgroundColor: `${customColor.black}90`,
  },
  content: {
    '--imageSize': 'min(100vw, 100vh)',
    overflow: 'hidden',
    background: 'none',
    top: '50%',
    left: '50%',
    width: 'var(--imageSize)',
    height: 'var(--imageSize)',
    transform: 'translate(-50%,-50%)',
    border: 'none',
  },
};

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
  src: string[];
};

export const PhotoModal = ({ isOpen, handleCloseModal, src }: Props) => {
  return (
    <Modal
      ariaHideApp={false}
      onRequestClose={handleCloseModal}
      isOpen={isOpen}
      style={modalStyle}
    >
      <StyledSwiper
        modules={[Navigation]}
        navigation
        spaceBetween={100}
        threshold={20}
      >
        <PrevButton onClick={handleCloseModal} aria-label="prev">
          <RxCross1 size={40} color={`${customColor.white}`} />
        </PrevButton>
        {src.map((data, index) => (
          <SwiperSlide key={`${data}-${index}`}>
            <ImageWrapper>
              <Image
                src={`/imgs/projects/slideImage/${data}`}
                alt="project"
                layout="fill"
                objectFit="contain"
                style={{
                  zIndex: 9,
                }}
              />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Modal>
  );
};
const ImageWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${customColor.gray};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PrevButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${customColor.darkGray}80;
  border-radius: 4px;
  top: 8px;
  right: 8px;
  z-index: 9;
`;
