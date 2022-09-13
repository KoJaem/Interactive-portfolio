import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectProject } from 'src/recoil/atom';
import { motion, useIsPresent } from 'framer-motion';
import { customColor } from 'src/constants';
import { simpleInfoType } from 'src/types';
import { Typography } from 'src/components';
import { MotionText } from './MotionText';
import { useRouter } from 'next/router';

export const SimpleIntro = () => {
  const [project, setProject] = useRecoilState(selectProject);
  const [projectInfo, setProjectInfo] = useState<simpleInfoType>();
  const router = useRouter();
  const isPresent = useIsPresent();
  const [isDetail, setIsDetail] = useState<boolean>(false);

  const getProjectInfo = useCallback(async () => {
    const { simpleInfo } = await require(`src/dummy/${project}`);
    setProjectInfo(simpleInfo);
  }, [project]);

  useEffect(() => {
    if (project) getProjectInfo();
  }, [project, getProjectInfo]);

  const handleExit = () => {
    setProject('');
    // Todo : 속도를 전부 원래대로 만들어줘야함
  };

  const handleDetail = () => {
    console.log('자세히보기 버튼 클릭');
    setIsDetail(true);
    router.push(`detail/${project}`);
  };
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
          <DetailBtn onClick={() => handleDetail()}>
            자세히보기 테스트
          </DetailBtn>
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
      <Screen
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isDetail ? 'left' : 'right' }} // 애니메이션 방향 설정
      />
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

const DetailBtn = styled.section`
  display: flex;
  background-color: lightblue;
`;

const Screen = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5c9ea7;
  z-index: 2;
`;