import Image from 'next/image';
import React from 'react';
import { purpleBoldShadow } from 'src/common/fontShadow';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import { mySkills } from 'src/dummy';
import styled, { css } from 'styled-components';
type Props = {
  refs: React.MutableRefObject<null[] | HTMLElement[]>;
};
export const MySkills = ({ refs }: Props) => {
  return (
    <Container ref={el => (refs.current[1] = el)}>
      <Typography
        fontShadow={purpleBoldShadow}
        size="3rem"
        color="purple"
        fontWeight="bold"
      >
        My <span style={{ color: customColor.magenta }}>Skills</span>
      </Typography>
      <Wrapper>
        <Left>
          <Typography size="2rem" color="black" fontWeight="bold" opacity={0.5}>
            Tech
          </Typography>
          <SmallImageContainer>
            {mySkills.Tech.smallImage.map((data, i) => (
              <SmallImageWrapper key={i}>
                <Image
                  src={`/imgs/mySkills/${data}`}
                  width={85}
                  height={85}
                  objectFit={'contain'}
                  alt="techSkill"
                />
              </SmallImageWrapper>
            ))}
          </SmallImageContainer>
          {mySkills.Tech.image.map((data, i) => (
            <ImageWrapper key={i}>
              <Image
                src={`/imgs/mySkills/${data}`}
                width={275}
                height={85}
                alt="techSkill"
                objectFit={'contain'}
              />
            </ImageWrapper>
          ))}
        </Left>
        <Right>
          <CategoryWrapper>
            <Typography
              size="2rem"
              color="black"
              fontWeight="bold"
              opacity={0.5}
            >
              Community
            </Typography>
            {mySkills.Community.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/imgs/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
                  objectFit={'contain'}
                />
              </ImageWrapper>
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            <Typography
              size="2.5rem"
              color="black"
              fontWeight="bold"
              opacity={0.5}
            >
              Deployment
            </Typography>
            {mySkills.Deployment.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/imgs/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
                  objectFit={'contain'}
                />
              </ImageWrapper>
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            <Typography
              size="2.5rem"
              color="black"
              fontWeight="bold"
              opacity={0.5}
            >
              API
            </Typography>
            {mySkills.API.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/imgs/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
                  objectFit={'contain'}
                />
              </ImageWrapper>
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            <Typography
              size="2.5rem"
              color="black"
              fontWeight="bold"
              opacity={0.5}
            >
              Mobile
            </Typography>
            {mySkills.Mobile.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/imgs/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
                  objectFit={'contain'}
                />
              </ImageWrapper>
            ))}
          </CategoryWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    ${customColor.black} 1%,
    ${customColor.lightMagenta} 10% 90%,
    ${customColor.black} 100%
  );
  gap: 80px 0;
  padding: 300px 0;
`;

const Wrapper = styled.section`
  width: 100%;
  /* background-color: ${customColor.white}; */
  /* background: radial-gradient(
    circle,
    ${customColor.orange},
    ${customColor.lightMagenta}
  ); */
  /* background-color: ${customColor.darkGray}20; */
  max-width: 1178px;
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 80px;
  padding-top: 0;
  flex-wrap: wrap;
  @media screen and (min-width: 840px) {
    flex-wrap: nowrap;
  }
`;

const Left = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  margin-top: 80px;
  min-width: 280px;

  @media screen and (min-width: 840px) {
    position: sticky;
    height: max-content;
    top: 0;
  }

  @media screen and (min-width: 840px) {
    position: sticky;
    height: max-content;
    top: 0;
  }
`;

const SmallImageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 0;
  max-width: 340px;
  justify-content: space-between;
`;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px 0;
  margin-top: 80px;
  min-width: 280px;
`;

const imageWrapperCss = css`
  background-color: ${customColor.white};
  /* border: 4px solid ${customColor.black}; */
  box-shadow: 4px 12px 30px 6px ${customColor.black}30;
  transition: all 200ms ease;
  @media screen and (min-width: 320px) {
    :hover {
      scale: 1.1;
    }
  }
`;

const SmallImageWrapper = styled.section`
  border-radius: 8px;
  padding: 8px;
  ${imageWrapperCss}
`;

const ImageWrapper = styled.section`
  border-radius: 14px;
  width: 100%;
  max-width: 340px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${imageWrapperCss};
`;

const CategoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  align-items: center;
`;
