import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ProjectSwiper } from './components/ProjectSwiper';
import { ProjectIntro } from './components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';

const ButtonAnimate = {
  opacity: [0, 1],
  transition: { delay: 2.2 },
};
export const ProjectGalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [infoAnimation, setInfoAnimation] = useState<boolean>(false);

  const router = useRouter();


  const slideChange = ({ realIndex }: { realIndex: number }) => {
    setActiveIndex(realIndex);
    setInfoAnimation(true);
  };

  return (
    <Container>
      <PrevButton
        animate={ButtonAnimate}
        onClick={() => router.push('/')}
        aria-label="move-prev"
      >
        <RxCross1 size={40} color={`${customColor.darkGray}`} />
      </PrevButton>

      <Wrapper
        initial={{ x: 1920 }}
        animate={{ x: 0, transition: { duration: 2 } }}
      >
        <ProjectSwiper activeIndex={activeIndex} slideChange={slideChange} />

        <motion.div
          onAnimationComplete={() => setInfoAnimation(false)}
          animate={{
            opacity: infoAnimation ? [1, 0] : [0, 1],
            y: infoAnimation ? [0, 10] : [10, 0],
          }}
          transition={{ duration: 0.2 }}
          style={{ width: '100%' }}
        >
          <ProjectIntro activeIndex={activeIndex} />
        </motion.div>
        <NotionButton
          animate={ButtonAnimate}
          aria-label="open-notion"
          onClick={() =>
            window.open(
              'https://kojaem.notion.site/KoJaem-5d7f92f6e40a4ed7b019a69600060629?pvs=4',
            )
          }
        >
          <Image src={'/notionIcon.png'} width={30} height={30} alt="Notion" />
        </NotionButton>
      </Wrapper>
    </Container>
  );
};
const Container = styled(motion.div)`
  display: flex;
  /* align-items: center; */
  /* flex-direction: column; */
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 60px;
  overflow-y: auto;
  background: linear-gradient(${customColor.skyBlue}, ${customColor.white});
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PrevButton = styled(motion.button)`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 9;
`;

const NotionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  bottom: 20px;
`;
