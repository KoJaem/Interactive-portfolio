import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { customColor } from 'src/constants';
import { selectProject } from 'src/recoil/atom';
import styled from 'styled-components';
import { ClickImage, SimpleIntro } from './components';
import { ProjectSwiper } from './components/ProjectSwiper';

export const ProjectGalleryPage = () => {
  const selectedProject = useRecoilValue(selectProject);

  return (
    <Container
      initial={{ backgroundColor: customColor.white }}
      animate={{
        backgroundColor: selectedProject
          ? customColor.purple
          : customColor.darkGray,
        transition: { duration: selectedProject ? 2 : undefined },
      }}
    >
      <Wrapper
        initial={{ x: '100%' }}
        animate={{ x: 0, transition: { duration: 2 } }}
      >
        <ProjectSwiper />

      </Wrapper>
    </Container>
  );
};
{/* <ClickImage src="/fashion-exhibition.jpg" /> */}
{/* <MoveImage src="/sample1.jpg" /> */}
{/* <MoveImage src="/sample2.jpg" /> */}
{/* <MoveImage src="/sample3.jpg" /> */}
{/* <AnimatePresence mode="wait"> */}
{/* {selectedProject && <SimpleIntro />} */}
{/* </AnimatePresence> */}
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
