import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectProject } from 'src/recoil/atom';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { ProjectSwiper } from './components/ProjectSwiper';
import { Typography } from 'src/components';
import { projects } from 'src/dummy/projectUrls';

export const ProjectGalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [infoAnimation, setInfoAnimation] = useState<boolean>(false);

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
          }}
          transition={{ duration: 0.1 }}
        >
          <Typography size="20" color="black">
            {projects[activeIndex].info}
          </Typography>
        </motion.div>
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
  width: 100%;
  height: 100%;
  background-color: ${customColor.lightYellow};
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;
