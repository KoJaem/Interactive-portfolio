import { projectType } from 'src/types';

export const projects: projectType[] = [
  {
    slideImage: 'fashion-exhibition.jpg',
    title: '인터렉티브 패션 전시회 웹',
    people: '프론트 4 (개인프로젝트 + 피드백)',
    date: ['2021.10', '2021.12'],
    imageUrl: ['fashion-exhibition.jpg', 'fashion-exhibition.jpg'],
    info: '인터렉티브 패션 전시회 웹 설명',
    developEnv: ['React', 'TypeScript', 'Emotion', 'Framer-motion', 'Figma'],
    link: {
      github: 'https://github.com/KoJaem/jolp-exhibition-fashion',
      githubPage: 'https://kojaem.github.io/jolp-exhibition-fashion/',
      // https://artvelop.github.io/jolp-exhibition/
    },
  },
  {
    slideImage: 'travel-with-pet.png',
    title: '반려동물 커뮤니티',
    people: '프론트 3, 백엔드 1',
    date: ['2022.03', '2022.06'],
    imageUrl: ['travel-with-pet.png', 'travel-with-pet.png'],
    info: '반려동물 커뮤니티 설명',
    developEnv: ['Next.js', 'TypeScript', 'Styled-components', 'Figma'],
    link: {
      github: 'https://github.com/potato-club/travel-with-pet',
      aws: 'https://d1ql6v5yorw07d.cloudfront.net/',
    },
  },
  {
    slideImage: 'easyphoto.png',
    title: '포토샵 커미션 사이트',
    people: '프론트 3, 백엔드 1',
    date: ['2022.03', '2023.01'],
    imageUrl: ['easyphoto.png', 'easyphoto.png'],
    info: '이지포토 프로젝트 소개',
    developEnv: [
      'Next.js',
      'Typescript',
      'Styled-components',
      'Axios',
      'React-Query',
      'Figma',
    ],
    link: {
      github: 'https://github.com/potato-club/photoshop-commission-site',
      aws: 'https://easyphoto.site/',
    },
  },
  {
    slideImage: 'weather-outfit.png',
    title: '날씨별 코디추천 사이트',
    people: '프론트 3, 백엔드 1',
    date: ['2022.05', 'ing'],
    imageUrl: ['weather-outfit.png', 'weather-outfit.png'],
    info: '날씨별 프로젝트 소개',
    developEnv: [
      'Next.js',
      'TypeScript',
      'Emotion',
      'Axios',
      'React-Hook-Form',
      'React-Dev-Tools',
      'React-Query',
      'nx workspace',
      'Figma',
    ],
    link: {
      github: 'https://github.com/potato-club/temperature-outfit',
    },
    // 사실상 12월5일에 끝난 프로젝트지만, 디자인 및 프로젝트 구조 변경을 하기로 결정하고 좀 더 추가작업중
  },
];
