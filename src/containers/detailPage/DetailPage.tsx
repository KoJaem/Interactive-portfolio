import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion, useIsPresent } from 'framer-motion';

export const DetailPage = () => {
  const router = useRouter();
  const { project } = router.query;
  const isPresent = useIsPresent();

  return (
    <>
      야야야야야야
      <button
        onClick={() => {
          router.push(
            {
              pathname: `/`,
              query: {
                screenAnimation: true,
              },
            },
            `/`,
          );
        }}
      >
        테스트버튼
      </button>
    </>
  );
};

const Screen = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5c9ea7;
  z-index: 2;
`;
