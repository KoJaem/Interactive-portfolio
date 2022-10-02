import { useRouter } from 'next/router';
import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Intro } from './components';

export const IndexPage = () => {
  const router = useRouter();
  return (
    <Container>
      <Intro />
      
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  height: 100vh;
  background-color: ${customColor.black};
  justify-content: center;
`;
