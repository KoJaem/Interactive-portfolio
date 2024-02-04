import { useRef } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { Header, Intro, MyInfo, MySkills, Projects } from './components';
import { IntersectionWrapper } from 'src/components/intersectionWrapper';

export const IndexPage = () => {
  const buttonRefs = useRef<null[] | HTMLElement[]>(new Array(3));
  return (
    <Container>
      <Header refs={buttonRefs} />
      <Intro />
      <GapLine />
      <IntersectionWrapper>
        <MyInfo refs={buttonRefs} />
        <Gap />
      </IntersectionWrapper>
      <IntersectionWrapper>
        <MySkills refs={buttonRefs} />
        <Gap />
      </IntersectionWrapper>
      <IntersectionWrapper>
        <Projects refs={buttonRefs} />
      </IntersectionWrapper>
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
