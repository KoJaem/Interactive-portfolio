import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from 'src/components';
import { TextBox } from './TextBox';
import { MdClose } from 'react-icons/md';
import { ImEnlarge } from 'react-icons/im';

export const ProjectIntro = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Typography size="2rem" color={'purple'} fontWeight="bold"> 
            {/* {projectInfo.title} */}
            asdasd
          </Typography>
          <Typography size="1rem" fontWeight="bold">
            asdasd
            {/* {`${projectInfo.date[0]} ~ ${projectInfo.date[1]}`} */}
          </Typography>
        </Title>
        <Introduction>
          <TextBox
            color="#6774E5"
            paddingLR={28}
            paddingBT={16}
            description="프로젝트 주제"
          >
            <Typography size="1.3rem" color="white" fontWeight="bold">
              {/* {projectInfo.topic} */}
              asdasdasd
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
              fontHeight="1.2"
            >
              {/* {projectInfo.intro} */}
              asdasdasd
            </Typography>
          </TextBox>
          <EndIntro>
            <TextBox
              color="#78ABF6"
              paddingLR={28}
              paddingBT={20}
              description="개발환경"
            >
              asdasdasdasd
              {/* {projectInfo.developEnv.map((data, i) => (
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
            <TextBox
              color="#78ABF6"
              paddingLR={28}
              paddingBT={20}
              gapBT={12}
              description="나의역할"
            >
              {/* {projectInfo.myRole.map((data, i) => (
                  <Typography
                    size="1.2rem"
                    color="white"
                    fontWeight="bold"
                    key={i}
                  >
                    {data}
                  </Typography>
                ))} */}
              asdasdasdasd
            </TextBox>
          </EndIntro>
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
  height: 100%;
  position: relative;
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

const EndIntro = styled.section`
  display: flex;
  width: 100%;
  gap: 0 12px;
`;
