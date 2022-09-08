import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { checkClick, selectProject } from 'src/recoil/atom';
import { motion } from 'framer-motion';
import { customColor } from 'src/constants';
import { simpleInfoType } from 'src/types';
import { Typography } from 'src/components';
import { MotionText } from './MotionText';

export const SimpleIntro = () => {
  const [project, setProject] = useRecoilState(selectProject);
  const [projectInfo, setProjectInfo] = useState<simpleInfoType>();
  const setClick = useSetRecoilState(checkClick);

  const getProjectInfo = useCallback(async () => {
    const {simpleInfo} = await require(`src/dummy/${project}`);
    setProjectInfo(simpleInfo);
  }, [project]);

  useEffect(() => {
    if (project) getProjectInfo();
  }, [project, getProjectInfo]);

  const handleExit = () => {
    setClick(false);
    setProject('');
    // Todo : 속도를 전부 원래대로 만들어줘야함
  }
  return (
    <>
      {projectInfo && (
        <Container
          animate={{
            backgroundColor: [customColor.darkGreen, customColor.darkSky],
            transition: {
              backgroundColor: {
                duration: 1,
              },
            },
          }}
          exit={{
            backgroundColor: customColor.lightYellow,
            transition: { duration: 1 },
          }}
        >
          <ExitBtn onClick={() => handleExit()}>X버튼 테스트</ExitBtn>
          <MotionText>
            <Typography size="40">{projectInfo.title}</Typography>
            <Typography size="20">{`${projectInfo.date[0]} ~ ${projectInfo.date[1]}`}</Typography>
            <Typography size="20">{projectInfo.topic}</Typography>
            <Typography size="20">{projectInfo.intro}</Typography>
            <Typography size="20">
              기술스택
              {projectInfo.developEnv.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </Typography>
            <Typography size="20">
              나의 역할
              {projectInfo.myRole.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </Typography>
          </MotionText>
        </Container>
      )}
    </>
  );
};

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1178px;
  padding: 0 40px;
  padding-top: calc(15vh + 150px);
  overflow-y: auto;
`;

const ExitBtn = styled.section`
  display: flex;
  background-color: white;
`;