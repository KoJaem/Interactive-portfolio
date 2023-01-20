import React from 'react';
import { MoreButton, Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import Image from 'next/image';
import { purpleBoldShadow } from 'src/common/fontShadow';
type Props = {
  refs: React.MutableRefObject<null[] | HTMLElement[]>;
};
export const MyInfo = ({refs}:Props) => {
  return (
    <Container ref={(el) => {
      refs.current[0] = el}}>
      <Title>
        <Typography
          fontShadow={purpleBoldShadow}
          size="3rem"
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
          width={340}
          height={340}
          alt="profile"
        />
        <Contents>
          <InfoWrapper>
            <Typography size="1.5rem" color="white" fontWeight="bold" lineHeight={1.4}>
              고재민
            </Typography>
            <Typography size="1.5rem" color="white" fontWeight="bold">
              tel : 010-2258-1401
            </Typography>
            <Typography
              size="1.5rem"
              color="white"
              fontWeight="bold"
              lineHeight={1.4}
            >
              woalswhwh@gmail.com
            </Typography>
            <Line />
            <section
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Typography size="1.5rem" color="skyBlue" fontWeight="bold">
                FrontEnd
              </Typography>
              <button onClick={() => window.open('https://github.com/KoJaem')}>
                <Typography size="1.5rem" color="magenta" fontWeight="bold">
                  GitHub
                </Typography>
              </button>
            </section>
          </InfoWrapper>
          <Typography size="1.2rem" color="darkGray" fontWeight="bold">
            내일의 나에게 부끄럽지 않은 하루를 보내자
          </Typography>
          <MoreButton
            style={{
              alignSelf: 'flex-end',
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              position: 'relative',
            }}
            backgroundColor="white"
            onClick={() =>
              window.open(
                'https://quiet-tangerine-0f6.notion.site/5d7f92f6e40a4ed7b019a69600060629',
              )
            }
          >
            <Image
              src={'/notionIcon.png'}
              width={100}
              height={100}
              alt="Notion"
            />
            <Typography
              size="1.3rem"
              color="black"
              fontWeight="bold"
              lineHeight={1.2}
            >
              Notion
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
  width: 100%;
  overflow-wrap: anywhere;
`;

const Line = styled.hr`
  border: 1px solid ${customColor.gray};
  justify-self: flex-start;
  margin: 0;
  width: 100%;
`;
