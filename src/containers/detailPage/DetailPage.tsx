import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion, useIsPresent } from 'framer-motion';
import { detailInfoType } from 'src/types';

export const DetailPage = () => {
  const router = useRouter();
  const { project } = router.query;
  const [projectInfo, setProjectInfo] = useState<detailInfoType>();

  const getProjectInfo = useCallback(async () => {
    const { simpleInfo } = await require(`src/dummy/${project}`);
    setProjectInfo(simpleInfo);
  }, [project]);

  // * 새로고침하고 바로 돌아오는 버튼 누르면 오류생기는데, 그거 방지하는 코드
  // * 이후 코드수정에서 필요없는 코드가 될 수 있으니 우선 주석처리
  // const getProjectInfo = useCallback(async () => {
  //   try {
  //     const { simpleInfo } = await require(`src/dummy/${project}`);
  //     simpleInfo && setProjectInfo(simpleInfo);
  //   } catch (e) {
  //     console.log(e);
  //     return;
  //   }
  // }, [project]);

  useEffect(() => {
    if (!router.isReady) return;
    getProjectInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      {projectInfo && (
        <>
          {projectInfo.title}
          <button
            onClick={() => {
              router.push('/');
            }}
          >
            테스트버튼
          </button>
        </>
      )}
    </>
  );
};

const Screen = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5c9ea7;
  z-index: 2;
`;
