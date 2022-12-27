import { motion } from 'framer-motion';
import React from 'react';
import { customColor } from 'src/constants';
import styled, { css } from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { GradientTypography } from 'src/components/GradientTypography';
import { GradientSvg } from './GradientSvgIcon';
const buttonVariants = {
  initial: {
    color: customColor.darkGray,
  },
  hover: {
    borderBottom: `3px solid ${customColor.gray}`,
    color: customColor.white,
    transition: {
      duration: 0.1,
    },
  },
  tap: {
    borderBottom: `1px solid ${customColor.gray}`,
  },
};

export const Header = () => {
  return (
    <Container>
      <Title>
        <GradientTypography
          size="2.5rem"
          color1="purple"
          color2="magenta"
          fontWeight="bold"
        >
          Ko
        </GradientTypography>
        <GradientTypography
          size="2.5rem"
          color1="magenta"
          color2="black"
          fontWeight="bold"
        >
          Jaem
        </GradientTypography>
      </Title>
      <ButtonWrapper>
        <Button
          type="button"
          initial="initial"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          My Info
        </Button>
        <Button
          type="button"
          initial="initial"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Projects
        </Button>
        <GithubButton
          type="button"
          initial={{ opacity: 0.6 }}
          whileHover={{
            opacity: 1,
            color: customColor.white,
          }}
          whileTap={{
            borderRadius: '50%',
          }}
          onClick={() => window.open('https://github.com/KoJaem')}
        >
          Github
        </GithubButton>
      </ButtonWrapper>
      <MenuIcon>
        <GradientSvg
          Icon={AiFillGithub}
          color1={customColor.magenta}
          color2={customColor.purple}
        />
      </MenuIcon>
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  top: 60px;
  display: none;
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
  z-index: 1;
  @media screen and (min-width: 480px) {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 1040px) {
    padding: 0 60px;
  }
`;

const Title = styled.section`
  display: flex;
`;

const ButtonWrapper = styled.section`
  display: none;
  gap: 0 80px;
  font-size: 1rem;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const buttonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  padding: 12px 0;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
`;

const Button = styled(motion.button)`
  ${buttonCss}
  background-color: transparent;
  /* transition: color 200ms linear; */
  /* color: ${customColor.darkGray}; */
  /* :hover { */
    /* color: ${customColor.white}; */
  /* } */
`;

const GithubButton = styled(motion.button)`
  ${buttonCss}
  background: linear-gradient(60deg, ${customColor.magenta} 0%, ${customColor.purple} 100%);
`;

const MenuIcon = styled.section`
  display: flex;
  position: absolute;
  right: 40px;
  margin-top: 8px;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
