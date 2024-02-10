import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { MoreButton, Typography } from 'src/components';
import { useRouter } from 'next/router';
import { ProjectSwiper_NewVersion } from 'src/containers/indexPage/components/ProjectSwiper_NewVersion';
import { GradientTypography } from 'src/components/GradientTypography';
import { useSetRecoilState } from 'recoil';
import { indexScreenAnimation } from 'src/recoil/atom';
import { IntersectionWrapper } from 'src/components/intersectionWrapper';
type Props = {
  refs: React.MutableRefObject<null[] | HTMLElement[]>;
};
export const Projects = ({ refs }: Props) => {
  const router = useRouter();
  const setIndexScreenAnimation = useSetRecoilState(indexScreenAnimation);
  return (
    <Container ref={el => (refs.current[2] = el)}>
      <IntersectionWrapper>
        <Wrapper>
          <Title>
            <GradientTypography
              size="4rem"
              color1="purple"
              color2="magenta"
              lineHeight={1.5}
              fontWeight="bold"
            >
              Projects
            </GradientTypography>
          </Title>
          <ProjectSwiper_NewVersion />
          <ButtonWrapper>
            <MoreButton
              onClick={async () => {
                setIndexScreenAnimation(false);
                await router.push('projectGallery');
                window.scrollTo({ top: refs.current[2]?.offsetTop! - 50 });
              }}
            >
              <Typography size="1.3rem" color="white" fontWeight="bold">
                More &gt;&gt;
              </Typography>
            </MoreButton>
          </ButtonWrapper>
        </Wrapper>
      </IntersectionWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.section`
`;
const ButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  max-width: 800px;
  @media screen and (min-width: 1023px) {
    max-width: 1200px;
  }
  margin-bottom: 40px;
`;
