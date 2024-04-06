import { useRef } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { Header, Intro, MyInfo, MySkills, Projects } from './components';
import Image from 'next/image';

export const IndexPage = () => {
  const buttonRefs = useRef<null[] | HTMLElement[]>(new Array(3));
  return (
    <Container>
      <Header refs={buttonRefs} />
      <Iphone>
        <IPhoneImage src={'iPhone.png'} objectFit='contain' layout='fill'/>
      </Iphone>
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

const Iphone = styled.section`
  position: relative;
  width: 640px;
  height: 360px;
`;

const IPhoneImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  object-fit: contain;
`;

// <iframe
// src="https://d3aqn2y3q7oegc.cloudfront.net"
// height="500"
// width="100%"
// ></iframe>
// <iframe
// src="https://d2ql7g3zfmsy1e.cloudfront.net"
// height="500"
// width="100%"
// ></iframe>
