import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaAws, FaGithubSquare } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import { projects } from 'src/dummy';
import styled from 'styled-components';
import { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GradientSvg } from './GradientSvgIcon';
import { PhoneGameComponent } from './PhoneGameComponent';

const TOP_ANIMATION_POSITION = 100;
// type Props = {
// slideChange: ({ realIndex }: { realIndex: number }) => void;
// };
export const ProjectSwiper_NewVersion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [gameLink, setGameLink] = useState<string>();

  const slideChange = ({ realIndex }: { realIndex: number }) => {
    setActiveIndex(realIndex);
  };

  // useEffect(() => {
  //   console.log(activeIndex);
  // }, [activeIndex]);

  return (
    <>
      <Container>
        <Wrapper>
          <StyledSwiper
            slidesPerView="auto"
            loop
            onSlideChange={slideChange}
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            centeredSlides
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            threshold={20}
            speed={500}
            coverflowEffect={{
              rotate: 0,
              depth: 300,
              slideShadows: false,
            }}
            // navigation={{
            //   prevEl: '.swiper-button-prev',
            //   nextEl: '.swiper-button-next',
            // }}
            // modules={[Pagination, Navigation]}
          >
            {projects.map((data, i) => (
              <StyledSwiperSlide key={i}>
                <AnimationBox>
                  <ImageWrapper
                    animate={{
                      y: activeIndex === i ? -TOP_ANIMATION_POSITION : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src={`/imgs/projects/thumbnail/${data.thumbnail}`}
                      layout="fill"
                      alt="project"
                      objectFit="cover"
                      style={{ borderRadius: 12 }}
                    />
                  </ImageWrapper>
                  {activeIndex === i && (
                    <Info
                      animate={{
                        opacity: [0.5, 1],
                        height: TOP_ANIMATION_POSITION + 20,
                        bottom: [TOP_ANIMATION_POSITION, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography size="1rem" color="black">
                        {data.title}
                      </Typography>
                      <SlideInfo>
                        <Typography
                          size="0.8rem"
                          color="darkGray"
                          textAlign="left"
                        >
                          {data.date[0]} ~ {data.date[1]}
                        </Typography>
                        <LinkWrapper>
                          {data.link.hasOwnProperty('github') && (
                            <button
                              onClick={() => window.open(data.link.github)}
                              aria-label={`open-${data.title}-github`}
                            >
                              <GradientSvg
                                Icon={AiFillGithub}
                                color1={customColor.skyBlue}
                                color2={customColor.black}
                                size={40}
                                id="slideGit"
                              />
                            </button>
                          )}
                          {data.link.hasOwnProperty('githubPage') && (
                            <button
                              onClick={() => window.open(data.link.githubPage)}
                              aria-label={`open-${data.title}-githubPage`}
                            >
                              <GradientSvg
                                Icon={FaGithubSquare}
                                color1={customColor.skyBlue}
                                color2={customColor.purple}
                                size={40}
                                id="githubPage"
                                direction="leftToRight"
                              />
                            </button>
                          )}
                          {data.link.hasOwnProperty('aws') && (
                            <button
                              onClick={() => window.open(data.link.aws)}
                              aria-label={`open-${data.title}-aws`}
                            >
                              <GradientSvg
                                Icon={FaAws}
                                color1={customColor.orange}
                                color2={customColor.darkGray}
                                size={40}
                                id="aws"
                                direction="leftToRight"
                              />
                            </button>
                          )}
                          {data.action?.hasOwnProperty('game') && (
                            <>
                              <GameButton
                                // onClick={() => window.open(data.link.githubPage)}
                                onClick={() => {
                                  setGameLink(data.action?.game);
                                }}
                                aria-label={`open-${data.title}-game`}
                              >
                                <GradientSvg
                                  Icon={IoLogoGameControllerB}
                                  color1={customColor.skyBlue}
                                  color2={customColor.purple}
                                  size={40}
                                  id="game1"
                                  direction="leftToRight"
                                />
                              </GameButton>
                              <ResponsiveText>
                                <Typography
                                  size="0.8rem"
                                  textAlign="center"
                                  color="darkGray"
                                >
                                  1280 이상 해상도에서 플레이가 가능합니다.
                                </Typography>
                              </ResponsiveText>
                            </>
                          )}
                          {data.action?.hasOwnProperty('game2') && (
                            <GameButton
                              // onClick={() => window.open(data.action.githubPage)}
                              onClick={() => {
                                setGameLink(data.action?.game2);
                              }}
                              aria-label={`open-${data.title}-game2`}
                            >
                              <GradientSvg
                                Icon={IoLogoGameControllerB}
                                color1={customColor.purple}
                                color2={customColor.skyBlue}
                                size={40}
                                id="game2"
                                direction="leftToRight"
                              />
                            </GameButton>
                          )}
                        </LinkWrapper>
                      </SlideInfo>
                    </Info>
                  )}
                </AnimationBox>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </Wrapper>
      </Container>
      {gameLink && (
        <PhoneGameComponent
          containerWidth={1100}
          containerHeight={530}
          iframeWidth={932}
          iframeHeight={430}
          src={gameLink}
        />
      )}
    </>
  );
};

const Container = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin: 0 0 40px 0;
  @media screen and (min-width: 488px) {
    margin: 20px 0 40px 0;
  }
  @media screen and (min-width: 768px) {
    margin: 40px 0;
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  /* border-radius: 12px; */
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  /* border-radius: 12px; */
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  width: 80%;
  height: 100%;
  max-width: 400px;
  overflow: visible;
  position: relative;
  justify-content: center;
  align-items: center;
  /* border-radius: 12px; */
  :not(.swiper-slide-active) {
    filter: brightness(70%);
  }
`;

const AnimationBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  align-self: end;
  z-index: 2;
`;

const Info = styled(motion.div)`
  position: absolute;
  width: 100%;
  z-index: 1;
  padding-top: 28px !important;
  background-color: ${customColor.lightGray};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SlideInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  z-index: 99;
  height: 42px;
`;

const GameButton = styled.button`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

const ResponsiveText = styled.p`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
