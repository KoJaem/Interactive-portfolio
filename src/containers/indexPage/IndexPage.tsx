import { useRef } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { Header, Intro, MyInfo, MySkills, Projects } from './components';

export const IndexPage = () => {
  const buttonRefs = useRef<null[] | HTMLElement[]>(new Array(3));
  return (
    <Container>
      <Header refs={buttonRefs} />
      {/* <Iphone width={700} height={400}>
        <Iframe
          width={600}
          height={300}
          src="https://d2ql7g3zfmsy1e.cloudfront.net"
        />
      </Iphone>
      <Iphone width={1100} height={530}>
        <Iframe
          width={932}
          height={430}
          src="https://d3aqn2y3q7oegc.cloudfront.net"
        />
      </Iphone> */}
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

type StyledProps = {
  width: number;
  height: number;
};
const Iphone = styled.section<StyledProps>`
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  /* width: 710px; */
  /* height: 400px; */
  overflow: hidden;
  background-image: url('iPhone.png');
  background-repeat: no-repeat;
  overflow: hidden;
  object-fit: contain;
  background-size: contain;
  background-position: center;
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

const Iframe = styled.iframe<StyledProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 24px;
`;
