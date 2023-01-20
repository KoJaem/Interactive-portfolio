import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from 'src/components';
import { TextBox } from './TextBox';
import { MdClose } from 'react-icons/md';
import { ImEnlarge } from 'react-icons/im';
import { projects } from 'src/dummy/projects';
import Link from 'next/link';
import { linkType } from 'src/types/project.type';
import { customColor } from 'src/constants';
type Props = {
  activeIndex : number;
}
export const ProjectIntro = ({ activeIndex }: Props) => {
  const project = projects[activeIndex];
  // console.log(activeIndex)
  return (
    <Container>
      <Wrapper>
        <Title>
          <Typography size="2rem" color={'purple'} fontWeight="bold">
            {/* {projectInfo.title} */}
            {project.title}
          </Typography>
          <Typography size="1rem" fontWeight="bold">
            {`${project.date[0]} ~ ${project.date[1]}`}
          </Typography>
        </Title>
        <Introduction>
          <TextBox
            color="#6774E5"
            paddingLR={28}
            paddingBT={16}
            description="프로젝트 인원"
          >
            <Typography size="1.3rem" color="white" fontWeight="bold">
              {project.people}
            </Typography>
          </TextBox>
          <TextBox
            color="#78ABF6"
            paddingLR={28}
            paddingBT={40}
            description="프로젝트 소개"
          >
            <Typography
              size="1.3rem"
              fontWeight="bold"
              color="white"
              lineHeight={1.2}
            >
              {project.info}
            </Typography>
          </TextBox>
          <Flex>
            <TextBox
              color="#78ABF6"
              paddingLR={28}
              paddingBT={20}
              description="개발환경"
            >
              {project.developEnv.map((data, i) => (
                <Typography
                  size="1.2rem"
                  color="white"
                  fontWeight="bold"
                  key={i}
                >
                  {data}
                </Typography>
              ))}
            </TextBox>
            <TextBox
              color="#78ABF6"
              paddingLR={28}
              paddingBT={20}
              description="나의 역할"
            >
              {/* {project.myRole.map((data, i) => (
                  <Typography
                    size="1.2rem"
                    color="white"
                    fontWeight="bold"
                    key={i}
                  >
                    {data}
                  </Typography>
                ))} */}
            </TextBox>
          </Flex>
          <LinkBox>
            {Object.keys(project.link).map((data, i) => (
              <Typography size="1.2rem" color="white" fontWeight="bold" key={i}>
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
  margin-bottom: 40px;
`;

const Wrapper = styled.section``;

const IconWrapper = styled(motion.section)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  right: 80px;
`;

const ExitBtn = styled(MdClose)`
  cursor: pointer;
`;

const DetailBtn = styled(ImEnlarge)`
  cursor: pointer;
`;

const Title = styled.section`
  display: flex;
  align-items: baseline;
  gap: 0 12px;
`;

const Introduction = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px 0;
`;

const Flex = styled.section`
  display: flex;
  width: 100%;
  gap: 0 12px;
`;

const LinkBox = styled.div`
  position: relative;
  background-color: #78abf6;
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