import Image from 'next/image';
import React from 'react';
import { purpleBoldShadow } from 'src/common/fontShadow';
import { Typography } from 'src/components';
import { handleColor } from 'src/components/Typography';
import { IntersectionWrapper } from 'src/components/intersectionWrapper';
import { customColor } from 'src/constants';
import { customColorType } from 'src/constants/customColor';
import styled from 'styled-components';
type Props = {
  refs: React.MutableRefObject<null[] | HTMLElement[]>;
};
export const MyInfo = ({ refs }: Props) => {
  return (
    <Container
      ref={el => {
        refs.current[0] = el;
      }}
    >
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
      <IntersectionWrapper>
        <Wrapper>
          <Image
            style={{ borderRadius: 24 }}
            src={'/profile.jpg'}
            width={340}
            height={340}
            objectFit="cover"
            alt="profile"
          />
          <Contents>
            <InfoWrapper>
              <Typography
                size="1.5rem"
                color="white"
                fontWeight="bold"
                lineHeight={1.4}
              >
                고재민
              </Typography>
              <Typography size="1.5rem" color="white" fontWeight="bold">
                TEL : 010-2258-1401
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
              <ButtonWrapper>
                {/* <button onClick={() => window.open('https://github.com/KoJaem')}>
                <Typography size="1.5rem" color="magenta" fontWeight="bold">
                  GitHub
                </Typography>
              </button> */}

                <IconButton
                  backgroundColor="skyBlue"
                  style={{ gap: 4 }}
                  onClick={() => window.open('https://github.com/KoJaem')}
                  aria-label="open-github"
                >
                  <Image
                    src={'/GithubIcon.png'}
                    width={30}
                    height={30}
                    alt="My Github"
                  />
                  <Typography
                    size="1.3rem"
                    color="black"
                    fontWeight="bold"
                    lineHeight={1.2}
                    notBreak
                  >
                    Github
                  </Typography>
                </IconButton>

                <IconButton
                  style={{
                    gap: 4,
                  }}
                  backgroundColor="white"
                  onClick={() =>
                    window.open(
                      'https://quiet-tangerine-0f6.notion.site/5d7f92f6e40a4ed7b019a69600060629',
                    )
                  }
                  aria-label="open-notion"
                >
                  <Image
                    src={'/notionIcon.png'}
                    width={30}
                    height={30}
                    alt="My Notion"
                  />
                  <Typography
                    size="1.3rem"
                    color="black"
                    fontWeight="bold"
                    lineHeight={1.2}
                    notBreak
                  >
                    Notion
                  </Typography>
                </IconButton>
              </ButtonWrapper>
            </InfoWrapper>
            <Typography size="1.2rem" color="darkGray" fontWeight="bold">
              내일의 나에게 부끄럽지 않은 하루를 보내자
            </Typography>
          </Contents>
        </Wrapper>
      </IntersectionWrapper>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  min-height: 100vh;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
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

type StyledProps = {
  backgroundColor?: keyof customColorType;
};

const IconButton = styled.button<StyledProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? handleColor(backgroundColor) : customColor.purple};
  border-radius: 24px;
  padding: 12px 20px;
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
