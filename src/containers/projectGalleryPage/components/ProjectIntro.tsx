import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import { projects } from 'src/dummy/projects';
import styled from 'styled-components';
import { TextBox } from './TextBox';
import { ChangeColorText } from './index';

type Props = {
  activeIndex: number;
};
export const ProjectIntro = ({ activeIndex }: Props) => {
  const project = projects[activeIndex];
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <Title>
          <Typography size="1rem" color={'purple'} fontWeight="bold">
            {project.title}
          </Typography>
          <Typography size="1rem">
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
            <Typography size="1rem" color="white">
              {project.people}
            </Typography>
          </TextBox>
          <TextBox
            color="gray"
            paddingLR={20}
            paddingBT={20}
            description="프로젝트 개요"
          >
            <ChangeColorText text={project.info} />
          </TextBox>
          <TextBox
            color="gray"
            paddingLR={20}
            paddingBT={20}
            description="프로젝트 기능"
          >
            <ChangeColorText text={project.function} />
          </TextBox>
          <Flex>
            <TextBox
              color="purple"
              paddingLR={20}
              paddingBT={10}
              gap={10}
              description="개발환경"
            >
              {project.developEnv.map((data, i) => (
                <Typography
                  size="0.8rem"
                  color="darkPurple"
                  listPoint
                  lineHeight={1.4}
                  key={i}
                >
                  {data}
                </Typography>
              ))}
            </TextBox>
            <TextBox
              color="purple"
              paddingLR={28}
              paddingBT={20}
              description="나의 역할"
              gap={10}
            >
              {project.myRole.map((data, i) => (
                <Typography
                  size="0.8rem"
                  color="darkPurple"
                  listPoint
                  lineHeight={1.4}
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
            {project.action && (
              <>
                {Object.keys(project.action).map((data, i) => (
                  <div
                    key={i}
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.push('/')}
                    aria-label="move-prev"
                  >
                    <Typography
                      size="0.8rem"
                      color="purple"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      {data}
                    </Typography>
                  </div>
                ))}
                <Typography size="0.8rem">
                  메인페이지에서 게임을 플레이 해보세요.(1280 이상 환경)
                </Typography>
              </>
            )}
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
  background-color: ${customColor.purple}50;
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
  box-shadow: 2px 2px 4px ${customColor.gray};
`;
