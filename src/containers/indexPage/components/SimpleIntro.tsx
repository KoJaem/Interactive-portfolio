import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from "recoil";
import { selectProject } from 'src/recoil/atom';
import { AnimatePresence, motion } from 'framer-motion';

export const SimpleIntro = () => {
  const projectName = useRecoilValue(selectProject);
  return (
    <Container
      animate={{
        backgroundColor: ['#b7c5b180', '#bdc0c2'],
        transition: {
          backgroundColor: {
            duration: 1,
          },
        },
      }}
      exit={{ backgroundColor: '#f9ffeb', transition: { duration: 1 } }}
    >
      {projectName}
    </Container>
  );
}

const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1178px;
`;