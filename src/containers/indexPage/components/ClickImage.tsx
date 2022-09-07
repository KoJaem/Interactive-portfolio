import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { checkClick, selectProject } from 'src/recoil/atom';
import styled from 'styled-components';

type Props = {
  src: string;
};
export default function ClickImage({ src }: Props) {
  const [click, setClick] = useRecoilState<boolean>(checkClick);
  const [project, setProject] = useRecoilState(selectProject);
  

  const getProjectName = (src: string) => {
    const projectName = src.slice(1).replace(/.jpg|.jpeg|.png|.gif/gi, '');
    return projectName;
  }


  useEffect(() => {
    click && console.log('클릭');
  }, [click]);

  const handleClick = () => {
    setClick(!click);
    project ? setProject('') : setProject(getProjectName(src)); //

    // Todo : 속도를 전부 0으로 만들어줘야함
  };

  return (
    <Container
      onClick={() => handleClick()}
      initial={{ translateX: '-50%', translateY: '-50%', left: '50%', top:'50%',}}
      animate={{
        left: click ? '50%' : undefined,
        top: click ? '15vh' : '50%',
        scale: click ? [1, 1.25, 1] : 1,
        transition: {
          delay: 0.5, duration: 0.5,
          scale: { duration: 1, delay: 0 },
        },
      }}
    >
      <Img alt="" src={src} layout="fill" />
    </Container>
  );
}

const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 320px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px;
`;

const Img = styled(Image)``;
