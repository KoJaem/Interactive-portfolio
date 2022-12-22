import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import Image from 'next/image';
import { whiteShadow } from 'src/common/fontShadow';



export const MyInfo = () => {
  return (
    <Container>
      <Title>
        <Typography
          fontShadow={whiteShadow}
          size="4rem"
          color="purple"
          fontWeight="bold"
        >
          My <span style={{ color: customColor.magenta }}>Info</span>
        </Typography>
      </Title>
      <Wrapper>
        <Image
          style={{ borderRadius: 50 }}
          src={'/profile.jpg'}
          width={320}
          height={320}
          alt="profile"
        />
        <Contents>
          <InfoWrapper>
            <Typography size="1.5rem" color="white" fontWeight="bold">
              고재민
            </Typography>
            <Typography size="1.5rem" color="white" fontWeight="bold">
              📞 010-2258-1401
            </Typography>
            <Typography
              size="1.5rem"
              color="white"
              fontWeight="bold"
              fontHeight="1.4"
            >
              💌woalswhwh@gmail.com
            </Typography>
            <Line />
            <section
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography size="1.5rem" color="skyBlue" fontWeight="bold">
                FrontEnd
              </Typography>
              <Typography size="1.5rem" color="magenta" fontWeight="bold">
                GitHub
              </Typography>
            </section>
          </InfoWrapper>
          <Typography size="1.2rem" color="darkGray" fontWeight="bold">
            내일의 나에게 부끄럽지 않은 하루를 보내자
          </Typography>
          <MoreButton onClick={() => window.open('https://quiet-tangerine-0f6.notion.site/5d7f92f6e40a4ed7b019a69600060629')}>
            <Typography size="1.3rem" color="white" fontWeight="bold">
              More &gt;&gt;
            </Typography>
          </MoreButton>
        </Contents>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
  /* @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0 120px;
  } */
`;

const Title = styled.section`
  margin-bottom: 10vh;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0 120px;
  }
`;

const Contents = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  height: 100%;
  width: 90%;
  overflow-wrap: anywhere;
`;

const Line = styled.hr`
  border: 1px solid ${customColor.gray};
  justify-self: flex-start;
  margin: 0;
  width: 100%;
`;

const MoreButton = styled.button`
  background-color: ${customColor.purple};
  border-radius: 24px;
  width: 160px;
  height: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  cursor: pointer;
`;
