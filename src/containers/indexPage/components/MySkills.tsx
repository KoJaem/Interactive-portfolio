import Image from 'next/image';
import React from 'react';
import { whiteShadow } from 'src/common/fontShadow';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import { mySkills } from 'src/dummy/mySkills';
import styled, { css } from 'styled-components';

export const MySkills = () => {
  return (
    <Container>
      <Typography
        fontShadow={whiteShadow}
        size="4rem"
        color="purple"
        fontWeight="bold"
      >
        My <span style={{ color: customColor.magenta }}>Skills</span>
      </Typography>
      <Wrapper>
        <Left>
          <Typography size="2.5rem" color="black" fontWeight="bold">
            Tech
          </Typography>
          <SmallImageContainer>
            {mySkills.Tech.smallImage.map((data, i) => (
              <SmallImageWrapper key={i}>
                <Image
                  src={`/mySkills/${data}`}
                  width={85}
                  height={85}
                  alt="techSkill"
                />
              </SmallImageWrapper>
            ))}
          </SmallImageContainer>
          {mySkills.Tech.image.map((data, i) => (
            <ImageWrapper key={i}>
              <Image
                src={`/mySkills/${data}`}
                width={275}
                height={85}
                alt="techSkill"
              />
            </ImageWrapper>
          ))}
        </Left>
        <Right>
          <CategoryWrapper>
            <Typography size="2.5rem" color="black" fontWeight="bold">
              Community
            </Typography>
            {mySkills.Community.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
                />
              </ImageWrapper>
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            <Typography size="2.5rem" color="black" fontWeight="bold">
              Deployment
            </Typography>
            {mySkills.Deployment.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
                />
              </ImageWrapper>
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            <Typography size="2.5rem" color="black" fontWeight="bold">
              API
            </Typography>
            {mySkills.API.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
                />
              </ImageWrapper>
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            <Typography size="2.5rem" color="black" fontWeight="bold">
              Mobile
            </Typography>
            {mySkills.Mobile.map((data, i) => (
              <ImageWrapper key={i}>
                <Image
                  src={`/mySkills/${data}`}
                  width={275}
                  height={85}
                  alt="techSkill"
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
  gap: 80px 0;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1178px;
  background-color: ${customColor.white};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 80px;
  padding-top: 0;
`;

const Left = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  margin-top: 80px;
  min-width: 340px;
  @media screen and (min-width: 840px) { // padding 80 + 80, min-width 340 + 340 => 840
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
  min-width: 340px;
`;

const imageWrapperCss = css`  
  box-shadow: 4px 12px 30px 6px ${customColor.black}30;
  :hover {
    scale: 1.1;
  }
  transition: all 200ms ease;
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
