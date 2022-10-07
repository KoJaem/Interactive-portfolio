import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import styled, { css } from 'styled-components';

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
        <Button type="button">
          <Typography size="20" color="white" fontWeight="bold">
            My Info
          </Typography>
        </Button>
        <Button type="button">
          <Typography size="20" color="white" fontWeight="bold">
            Projects
          </Typography>
        </Button>
        <GithubButton type="button">
          <Typography size="20" color="black" fontWeight="bold">
            Github
          </Typography>
        </GithubButton>
      </ButtonWrapper>
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
`;

const buttonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 12px 0;
  border-radius: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  ${buttonCss}
  background-color: transparent;
`;

const GithubButton = styled.button`
  ${buttonCss}
  background: linear-gradient(60deg, ${customColor.magenta} 0%, ${customColor.purple} 100%);
`;
