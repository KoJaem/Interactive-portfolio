import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { checkClick, selectProject } from 'src/recoil/atom';
import styled from 'styled-components';
import { MoveImage, SimpleIntro } from './components';
import ClickImage from './components/ClickImage';

export const IndexPage = () => {
  const click = useRecoilValue(checkClick);
  const project = useRecoilValue(selectProject);


  return (
    <Container
      initial={{ backgroundColor: '#f9ffeb' }}
      animate={{
        backgroundColor: click ? '#b7c5b180' : undefined,
        transition: { duration: click ? 2 : undefined },
      }}
    >
      <ClickImage src="/fashion-exhibition.jpg" />
      {/* <MoveImage src="/sample1.jpg" /> */}
      {/* <MoveImage src="/sample2.jpg" /> */}
      {/* <MoveImage src="/sample3.jpg" /> */}
      <AnimatePresence>{project && <SimpleIntro />}</AnimatePresence>
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