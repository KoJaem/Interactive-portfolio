import { useRef } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import {
  Header,
  Intro,
  MyInfo,
  MySkills,
  PhoneGameComponent,
  Projects,
} from './components';

export const IndexPage = () => {
  const buttonRefs = useRef<null[] | HTMLElement[]>(new Array(3));
  return (
    <Container>
      <Header refs={buttonRefs} />
      {/* <PhoneGameComponent
        containerWidth={700}
        containerHeight={400}
        iframeWidth={600}
        iframeHeight={300}
        src="https://d2ql7g3zfmsy1e.cloudfront.net"
      /> */}
      <PhoneGameComponent
        containerWidth={1100}
        containerHeight={530}
        iframeWidth={932}
        iframeHeight={430}
        src="https://d2ql7g3zfmsy1e.cloudfront.net"
      />
      <PhoneGameComponent
        containerWidth={1100}
        containerHeight={530}
        iframeWidth={932}
        iframeHeight={430}
        src="https://d3aqn2y3q7oegc.cloudfront.net"
      />
      <Intro />
      <GapLine />
      <MyInfo refs={buttonRefs} />
      <Gap />
      <MySkills refs={buttonRefs} />
      <Gap />
      <Projects refs={buttonRefs} />
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
