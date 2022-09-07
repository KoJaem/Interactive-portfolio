import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { selectProject } from 'src/recoil/atom';
import { motion } from 'framer-motion';
import { customColor } from 'src/constants';
import { simpleInfoType } from 'src/types';
import { Typography } from 'src/components';
import { MotionText } from './MotionText';

export const SimpleIntro = () => {
  const projectName = useRecoilValue(selectProject);
  const [project, setProject] = useState<simpleInfoType>();

  const getProjectInfo = useCallback(async () => {
    const {simpleInfo} = await require(`src/dummy/${projectName}`);
    setProject(simpleInfo);
  }, [projectName]);

  useEffect(() => {
    if (projectName) getProjectInfo();
  }, [projectName, getProjectInfo]);
  return (
    <>
      {project && (
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
          <MotionText>
            <Typography size="40">{project.title}</Typography>
            <Typography size="20">{`${project.date[0]} ~ ${project.date[1]}`}</Typography>
            <Typography size="20">{project.topic}</Typography>
            <Typography size="20">{project.intro}</Typography>
            <Typography size="20">
              기술스택
              {project.developEnv.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </Typography>
            <Typography size="20">
              나의 역할
              {project.myRole.map((data, i) => (
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
