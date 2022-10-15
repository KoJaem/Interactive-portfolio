import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import Image from 'next/image';

export const Projects = () => {
  return (
    <Container>
      <Image
        style={{ borderRadius: 50 }}
        src={'/profile.jpeg'}
        width={320}
        height={320}
        alt="profile"
      />
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
