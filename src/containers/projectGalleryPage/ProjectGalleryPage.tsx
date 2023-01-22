import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ProjectSwiper } from './components/ProjectSwiper';
import { ProjectIntro } from './components';

export const ProjectGalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [infoAnimation, setInfoAnimation] = useState<boolean>(false);

  useEffect(() => {
    
  }, [activeIndex]);

  const slideChange = ({ realIndex }: { realIndex: number }) => {
    setActiveIndex(realIndex);
    setInfoAnimation(true);
  };
  // const selectedProject = useRecoilValue(selectProject);

  return (
    <Container>
      <Wrapper
        initial={{ x: '100%' }}
        animate={{ x: 0, transition: { duration: 2 } }}
      >
        <ProjectSwiper slideChange={slideChange} />

        <motion.div
          onAnimationComplete={() => setInfoAnimation(false)}
          animate={{
            opacity: infoAnimation ? [1, 0] : [0, 1],
            y: infoAnimation ? [0, 10] : [10, 0],
          }}
          transition={{ duration: 0.2 }}
          style={{width: '100%'}}
        >
          <ProjectIntro activeIndex={activeIndex}/>
        </motion.div>
      </Wrapper>  
    </Container>
  );
};
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
  background: linear-gradient(${customColor.skyBlue}, ${customColor.white});
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
