import { motion } from 'framer-motion';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectProject } from 'src/recoil/atom';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ProjectSwiper } from './components/ProjectSwiper';

export const ProjectGalleryPage = () => {
  // const selectedProject = useRecoilValue(selectProject);

  return (
    <Container>
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
  background-color: ${customColor.lightYellow};
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
