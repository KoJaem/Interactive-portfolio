import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { MoveImage } from './components';

export const IndexPage = () => {
  return (
    <Container>
      <Typography size="16">IndexPage</Typography>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
