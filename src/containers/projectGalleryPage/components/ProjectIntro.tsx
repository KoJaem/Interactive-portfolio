import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from 'src/components';
import { TextBox } from './TextBox';
import { projects } from 'src/dummy/projects';
import Link from 'next/link';
import { customColor } from 'src/constants';
type Props = {
  activeIndex: number;
};
export const ProjectIntro = ({ activeIndex }: Props) => {
  const project = projects[activeIndex];
  return (
    <Container>
      <Wrapper>
        <Title>
          <Typography size="1rem" color={'purple'} fontWeight="bold">
            {project.title}
          </Typography>
          <Typography size="1rem" fontWeight="bold">
            {`${project.date[0]} ~ ${project.date[1]}`}
          </Typography>
        </Title>
        <Introduction>
          <TextBox
            color="deepBlue"
            paddingLR={20}
            paddingBT={10}
            description="프로젝트 인원"
          >
            <Typography size="1rem" color="white" fontWeight="bold">
              {project.people}
            </Typography>
          </TextBox>
          <TextBox
            color="magenta"
            paddingLR={20}
            paddingBT={20}
            description="프로젝트 소개"
          >
            <Typography
              size="0.8rem"
              fontWeight="bold"
              color="white"
              lineHeight={1.5}
            >
              {project.info}
            </Typography>
          </TextBox>
          <TextBox
            color="magenta"
            paddingLR={20}
            paddingBT={20}
            description="프로젝트 기능"
          >
            <Typography
              size="0.8rem"
              fontWeight="bold"
              color="white"
              lineHeight={1.5}
            >
              {project.function}
            </Typography>
          </TextBox>
          <Flex>
            <TextBox
              color="magenta"
              paddingLR={20}
              paddingBT={10}
              gap={10}
              description="개발환경"
            >
              {project.developEnv.map((data, i) => (
                <Typography
                  size="0.8rem"
                  color="white"
                  fontWeight="bold"
                  listPoint
                  key={i}
                >
                  {data}
                </Typography>
              ))}
            </TextBox>
            <TextBox
              color="magenta"
              paddingLR={28}
              paddingBT={20}
              description="나의 역할"
              gap={10}
            >
              {project.myRole?.map((data, i) => (
                <Typography
                  size="0.8rem"
                  color="white"
                  fontWeight="bold"
                  listPoint
                  key={i}
                >
                  {data}
                </Typography>
              ))}
            </TextBox>
          </Flex>
          <LinkBox>
            {Object.keys(project.link).map((data, i) => (
              <Typography
                size="0.8rem"
                color="purple"
                fontWeight="bold"
                key={i}
              >
                <Link href={project.link[data]!}>
                  <a target="_blank">{data}</a>
                </Link>
              </Typography>
            ))}
          </LinkBox>
        </Introduction>
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
  position: relative;
  padding: 20px;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`;

const Title = styled.section`
  display: flex;
  align-items: baseline;
  gap: 0 12px;
  width: 100%;
  justify-content: center;
`;

const Introduction = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Flex = styled.section`
  display: flex;
  width: 100%;
  gap: 0 12px;
`;

const LinkBox = styled.div`
  position: relative;
  background-color: ${customColor.magenta}50;
  padding: 28px 20px;
  border-radius: 24px;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  cursor: default;
  box-shadow: 4px 4px 5px ${customColor.darkGray};
`;
