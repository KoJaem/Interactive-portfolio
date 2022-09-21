import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { selectProject } from 'src/recoil/atom';
import styled from 'styled-components';
type Props = {
  children: ReactNode;
};
export const MotionText = ({ children }: Props) => {
  const project = useRecoilValue(selectProject);
  return (
    <Container
    initial={{y:50}}
     animate={{ 
      opacity: project ? [0,1] : [1,0],
      y: project ? 0 : 50,
      transition: {
        duration: 0.5,
        delay: project ? 1 : 0,
      }
     }}
     >{children}</Container>
  );
};

const Container = styled(motion.section)``;
