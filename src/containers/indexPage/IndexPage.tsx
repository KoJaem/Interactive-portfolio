import { useRouter } from 'next/router';
import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';

export const IndexPage = () => {
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <Greeting>
          <Typography size="60" color="gray" fontWeight='bold'>
            Welcome to the
          </Typography>
          <section style={{ display: 'flex' }}>
            <Typography size="80" color="purple" fontWeight='bold'>
              KoJaem&apos;s
            </Typography>
            <Typography size="80" color="magenta" fontWeight='bold'>
              &nbsp;exhibition
            </Typography>
          </section>
        </Greeting>
        <Typography size="40" color="white">
          저는 프론트엔드 개발자를 꿈꾸며 공부하는 학생입니다.
        </Typography>
        <Dia />
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  height: 100vh;
  background-color: ${customColor.black};
  justify-content: center;
`;

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30vh;
  width: 100%;
  background-color: ${customColor.black};
  max-width: 1000px;
  gap: 60px 0;
`;

const Greeting = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

const Dia = styled.section`
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 40px;
  height: 40px;
  background-color: ${customColor.white};
  transform: translate(-50%, -50%) rotateZ(45deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;