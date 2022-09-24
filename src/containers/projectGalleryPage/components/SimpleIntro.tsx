import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { selectProject } from 'src/recoil/atom';
import { motion } from 'framer-motion';
import { customColor } from 'src/constants';
import { simpleInfoType } from 'src/types';
import { Typography } from 'src/components';
import { MotionText } from './MotionText';
import { useRouter } from 'next/router';
import { TextBox } from './TextBox';

export const SimpleIntro = () => {
  const [project, setProject] = useRecoilState(selectProject);
  const [projectInfo, setProjectInfo] = useState<simpleInfoType>();
  const router = useRouter();
  // const [isDetail, setIsDetail] = useState<boolean>(false);

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
    // setIsDetail(true);
    router.push(`projectGallery/detail/${project}`);
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
            backgroundColor: [null, '#000000'], // test 테스트를 위해 검정색 넣음 나중엔 부모컴포넌트 색깔로 줄 예정 (customColor.lightYellow)
            transition: { duration: 1 },
          }}
        >
          {/* <ExitBtn onClick={() => handleExit()}>X버튼 테스트</ExitBtn>
          <DetailBtn onClick={() => handleDetail()}>
            자세히보기 테스트
          </DetailBtn> */}
          <MotionText>
            <Wrapper>
              <Title>
                <Typography size="40" color={'purple'} fontWeight="bold">
                  {projectInfo.title}
                </Typography>
                <Typography
                  size="20"
                  fontWeight="bold"
                >{`${projectInfo.date[0]} ~ ${projectInfo.date[1]}`}</Typography>
              </Title>
              <Introduction>
                <TextBox color="#6774E5" paddingLR={28} paddingBT={16}>
                  <Typography size="28" color="white" fontWeight="bold">
                    {projectInfo.topic}
                  </Typography>
                </TextBox>
                <TextBox color="#78ABF6" paddingLR={28} paddingBT={40}>
                  <Typography
                    size="28"
                    fontWeight="bold"
                    color="white"
                    fontHeight="1.2"
                  >
                    {projectInfo.intro}
                  </Typography>
                </TextBox>
                <EndIntro>
                  <TextBox color="#78ABF6" paddingLR={28} paddingBT={20}>
                    {projectInfo.developEnv.map((data, i) => (
                      <Typography
                        size="24"
                        color="white"
                        fontWeight="bold"
                        key={i}
                      >
                        {data}
                      </Typography>
                    ))}
                  </TextBox>
                  <TextBox color="#78ABF6" paddingLR={28} paddingBT={20} gapBT={12}>
                    {projectInfo.myRole.map((data, i) => (
                      <Typography
                        size="24"
                        color="white"
                        fontWeight="bold"
                        key={i}
                      >
                        {data}
                      </Typography>
                    ))}
                  </TextBox>
                </EndIntro>
              </Introduction>
            </Wrapper>
          </MotionText>
        </Container>
      )}
    </>
  );
};

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1178px;
  padding: 0 80px;
  padding-top: calc(15vh + 120px);
  overflow: hidden;
`;

const Wrapper = styled.section`
  max-width: 900px;
`;

const ExitBtn = styled.section`
  display: flex;
  background-color: white;
`;

const DetailBtn = styled.div`
  display: flex;
  background-color: lightblue;
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
