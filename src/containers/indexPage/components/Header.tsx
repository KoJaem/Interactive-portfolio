import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { customColor } from 'src/constants';
import styled, { css } from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { GradientTypography } from 'src/components/GradientTypography';
import { GradientSvg } from './GradientSvgIcon';
import { headers } from 'src/dummy';
import { throttle } from 'lodash';
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
type Props = {
  refs: React.MutableRefObject<null[] | HTMLElement[]>;
};
export const Header = ({ refs }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > window.innerHeight * 3.8) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   console.log(lastScrollY.current);
  // }, [lastScrollY]);

  // useEffect(() => {
  //   console.log(isVisible);
  // }, [isVisible]);

  const scrollMove = (index: number) => {
    const value = refs.current[index]?.offsetTop;
    const offset = index === 0 ? 0 : 100;
    window.scrollTo({
      top: value! - offset,
      behavior: 'smooth',
    });
  };

  return (
    <Container className={`header_${isVisible ? '' : 'hidden'}`}>
      <Title onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
        {headers.map((data, index) => (
          <Button
            type="button"
            initial="initial"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            key={index}
            onClick={() => scrollMove(index)}
          >
            {data}
          </Button>
        ))}
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
      <MenuIcon onClick={() => window.open('https://github.com/KoJaem')}>
        <GradientSvg
          Icon={AiFillGithub}
          color1={customColor.magenta}
          color2={customColor.purple}
          id="github"
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
  transition: top 0.5s ease;
  @media screen and (min-width: 480px) {
    display: flex;
    align-items: center;
  }
  /* @media screen and (min-width: 768px) {
    padding: 0 20px;
  } */
  @media screen and (min-width: 1040px) {
    padding: 0 60px;
  }
`;

const Title = styled.button`
  display: flex;
`;

const ButtonWrapper = styled.section`
  display: none;
  gap: 0 4vw;
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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
