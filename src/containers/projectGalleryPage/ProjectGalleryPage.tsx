import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ProjectSwiper } from './components/ProjectSwiper';
import { Typography } from 'src/components';
import { projects } from 'src/dummy/projects';
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
          transition={{ duration: 0.1 }}
        >
          <ProjectIntro activeIndex={activeIndex}/>
        </motion.div>
        {/* <Typography size="1.5rem" color="black">
          {projects[activeIndex].info}
        </Typography> */}
      </Wrapper>
    </Container>
  );
};
{
  /* <ClickImage src="/fashion-exhibition.jpg" /> */
}
{
  /* <MoveImage src="/sample1.jpg" /> */
}
{
  /* <MoveImage src="/sample2.jpg" /> */
}
{
  /* <MoveImage src="/sample3.jpg" /> */
}
{
  /* <AnimatePresence mode="wait"> */
}
{
  /* {selectedProject && <SimpleIntro />} */
}
{
  /* </AnimatePresence> */
}
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
  background-color: ${customColor.lightYellow};
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
