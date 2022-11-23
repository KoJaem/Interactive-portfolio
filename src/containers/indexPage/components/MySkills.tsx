import React from 'react'
import { whiteShadow } from 'src/common/fontShadow';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components'

export const MySkills = () => {
  return (
    <Container>
      <Typography fontShadow={whiteShadow} size="4rem" color='purple' fontWeight='bold'>My <span style={{color: customColor.magenta}}>Skills</span></Typography>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
`;