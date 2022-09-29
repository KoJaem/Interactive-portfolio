import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { customColor } from 'src/constants';
import { selectProject } from 'src/recoil/atom';
import styled from 'styled-components';
import { ClickImage, SimpleIntro } from './components';

export const ProjectGalleryPage = () => {
  const selectedProject = useRecoilValue(selectProject);

  return (
    <Container
      initial={{ backgroundColor: customColor.white }}
      animate={{
        backgroundColor: selectedProject ? customColor.purple : undefined,
        transition: { duration: selectedProject ? 2 : undefined },
      }}
    >
      <ClickImage src="/fashion-exhibition.jpg" />
      {/* <MoveImage src="/sample1.jpg" /> */}
      {/* <MoveImage src="/sample2.jpg" /> */}
      {/* <MoveImage src="/sample3.jpg" /> */}
      <AnimatePresence mode="wait">
        {selectedProject && <SimpleIntro />}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;