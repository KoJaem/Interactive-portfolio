import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import Image from 'next/image';

export const MyInfo = () => {
  return (
    <Container>
      <Image
        style={{ borderRadius: 50 }}
        src={'/profile.jpeg'}
        width={320}
        height={320}
        alt="profile"
      />
      <Wrapper>
        <InfoWrapper>
          <Typography size="32" color="white" fontWeight="bold">
            고재민
          </Typography>
          <Typography size="32" color="white" fontWeight="bold">
            📞 010-2258-1401
          </Typography>
          <Typography size="32" color="white" fontWeight="bold" fontHidden fontHeight='1.4'>
            💌woalswhwh@gmail.com
          </Typography>
          <Line />
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography size="32" color="skyBlue" fontWeight="bold">
              FrontEnd
            </Typography>
            <Typography size="32" color="magenta" fontWeight="bold">
              GitHub
            </Typography>
          </section>
        </InfoWrapper>
        <Typography size="24" color="darkGray" fontWeight="bold">
          내일의 나에게 부끄럽지 않은 하루를 보내자
        </Typography>
        <MoreButton>
          <Typography size="28" color="white" fontWeight="bold">
            More &gt;&gt;
          </Typography>
        </MoreButton>
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
  gap: 0 120px;
`;

const Wrapper = styled.section`
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
  white-space: nowrap;
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
  align-self: flex-end;
  cursor: pointer;
`;
