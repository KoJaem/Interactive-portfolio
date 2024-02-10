import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { indexScreenAnimation } from 'src/recoil/atom';
import { Screen } from './index';

type Props = {
  children: ReactNode;
};

export const ScreenAndSlide = ({ children }: Props) => {
  // 인덱스페이지를 처음들어왔으면 스크린 이벤트를 안보여주고, ProjectGallery 에서 다시 넘어왔으면 자연스럽게 스크린애니메이션을 보여주는 용도
  const checkIndexScreen = useRecoilValue(indexScreenAnimation);
  return (
    <>
      <motion.section
        exit={{
          x: '-100%',
          transition: {
            x: { duration: 1, ease: 'easeIn' },
          },
        }}
      >
        {children}
      </motion.section>
      {checkIndexScreen && <Screen />}
    </>
  );
};

