import { useRouter } from 'next/router';
import React from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { Header, Intro, MyInfo, Projects, MySkills } from './components';

export const IndexPage = () => {
  const router = useRouter();
  return (
    <Container>
      <Header />
      <Intro />
      <GapLine />
      <MyInfo />
      <Gap />
      <MySkills />
      <GapLine />
      <Projects />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${customColor.black};
  justify-content: center;
  align-items: center;
`;

const GapLine = styled.hr`
  margin: 20vh 0;
  border: 1px solid ${customColor.gray};
  width: 100%;
`;

const Gap = styled.section`
  margin: 20vh 0;
`;