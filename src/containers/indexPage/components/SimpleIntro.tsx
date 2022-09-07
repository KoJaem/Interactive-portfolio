import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from "recoil";
import { selectProject } from 'src/recoil/atom';
import { motion } from 'framer-motion';
import { customColor } from 'src/constants';

export const SimpleIntro = () => {
  const projectName = useRecoilValue(selectProject);
  return (
    <Container
      animate={{
        backgroundColor: [customColor.darkGreen, customColor.darkSky],
        transition: {
          backgroundColor: {
            duration: 1,
          },
        },
      }}
      exit={{ backgroundColor: customColor.lightYellow, transition: { duration: 1 } }}
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