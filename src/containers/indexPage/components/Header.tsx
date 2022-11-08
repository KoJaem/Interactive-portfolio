import { motion } from 'framer-motion';
import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled, { css } from 'styled-components';
import { MdMenu } from 'react-icons/md';
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
        <Typography size="40" color="purple" fontWeight="bold">
          Ko
        </Typography>
        <Typography size="40" color="magenta" fontWeight="bold">
          Jaem
        </Typography>
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
        >
          Github
        </GithubButton>
      </ButtonWrapper>
      {/* <MenuIcon>
        <MdMenu
          size={40}
        />
      </MenuIcon> */}
      <GradientTest>테스트트트</GradientTest>
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  top: 60px;
  display: flex;
  width: 100%;
  padding: 0 80px;
  justify-content: space-between;
  z-index: 1;
`;

const Title = styled.section`
  display: flex;
`;

const ButtonWrapper = styled.section`
  display: flex;
  gap: 0 80px;
  font-size: 20px;
  @media only screen and (max-width: 767px) {
    display: none;
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
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const Button = styled(motion.button)`
  ${buttonCss}
  background-color: transparent;
`;

const GithubButton = styled(motion.button)`
  ${buttonCss}
  background: linear-gradient(60deg, ${customColor.magenta} 0%, ${customColor.purple} 100%);
`;

const MenuIcon = styled.section`
  display: none;
  padding-top: 8px;

  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

const GradientTest = styled.div`
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
  font-weight: bold;
`;