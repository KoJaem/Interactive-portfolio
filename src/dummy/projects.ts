import { projectType } from 'src/types';

export const projects: projectType[] = [
  {
    slideImage: 'fashion-exhibition.jpg',
    title: '인터렉티브 패션 전시회 웹',
    people: '프론트 4 (개인프로젝트 + 피드백)',
    date: ['2021.10', '2021.12'],
    imageUrl: ['fashion-exhibition.jpg', 'fashion-exhibition.jpg'],
    info: `프로젝트의 주제는 "사용자에게 좋은 경험을 줄 수 있는 Interactive 한 소개 사이트를 만들어보자" 입니다.
저는 소개할 주제로 패션전시회를 선택했습니다
Framer 라는 리액트 라이브러리를 활용하여 만들었던, 제 첫 React 협업 프로젝트 입니다.
컨셉이 아예 다른 사이트를 개개인이 디자인부터 완전히 새롭게 작업한 뒤,
마지막에 합치는 형식으로 진행되었기에
동일한 개발환경이여도 실력에 따라 결과물이 완전히 다르게 나올 수 있다는걸 알게 해주었으며,
빨리 성장하고 싶다는 계기를 준 프로젝트 입니다.
또한, 이 프로젝트를 진행하면서 여러가지 배운점이 많았고, 아쉬운점도 많았기에
실력있는 개발자가 되려면 Leader-ship 만큼
Follow-ship 이 얼마나 중요한지 등 많은 것을 느끼게 해준 프로젝트 입니다.
프로젝트를 같이 진행한 조원들에게 여러 피드백과 도움을 받고 많은 성장을 할 수 있었고
저도 언젠가 "팀원들에게 피드백을 해줄 수 있는 역량이 있는 사람이 되고싶다"고 느꼈습니다.`,
    developEnv: ['React', 'TypeScript', 'Emotion', 'Framer-motion', 'Figma'],
    myRole: [
      'Figma 를 사용하여 페이지 UI 및 Interactive 애니메이션 구상',
      '구상한 디자인 전체 구현',
    ],
    link: {
      github: 'https://github.com/KoJaem/jolp-exhibition-fashion',
      githubPage: 'https://kojaem.github.io/jolp-exhibition-fashion/',
      // https://artvelop.github.io/jolp-exhibition/
    },
  },
  {
    slideImage: 'travel-with-pet.png',
    title: '반려동물 커뮤니티',
    people: '프론트 4, 백엔드 1',
    date: ['2022.03', '2022.06'],
    imageUrl: ['travel-with-pet.png', 'travel-with-pet.png'],
    info: `프로젝트의 주제는 "반려동물을 사랑하는 사람들을 위한 커뮤니티를 만들어보자" 입니다.
이 사이트에서는 반려동물과 함께 갈 수 있는 여행지, 식당, 숙박 등 여러시설에 대한 정보와
반려동물에 대한 일상이야기를 공유할 수 있는 사이트 입니다.
프론트 4, 백엔드 1 로 구성된 팀으로 프로젝트를 진행했으며,
하나의 사이트를 조원들과 맞춰가고 서로 도움을 주면서 성장할 수 있었습니다.
또한, 리액트를 처음 접해보는 인원을 멘토링 해주면서 내 코드를 다른사람에게 쉽게 설명하는 역량도 향상되는 계기가 되었습니다.`,
    developEnv: ['Next.js', 'TypeScript', 'Styled-components', 'Figma'],
    myRole: [
      '정보(메인)페이지, 일상 리스트 페이지 구현',
      '공용 컴포넌트 (포토카드)',
      '더미데이터 설정',
      '페이지네이션 구현 (React-js-pagination)',
      '리액트 멘토링',
    ],
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
    info: `프로젝트의 주제는 "사진 이렇게 편집해주세요!" 같은 글을 SNS 에서 몇번씩 본적이 있는데, 이러한 주제를 전담마크한 사이트를 한번 만들어보자는 생각에서 진행하게 되었습니다.
저에게는 되게 깊은 의미가 있던 프로젝트로, 백엔드 개발자와 협업을 처음 하는 프로젝트 였기에 API연동 및 백엔드 개발자와 협업을 적극적으로 진행하였습니다.
프로젝트 인원은 프론트개발자 3, 백엔드1 로 구성되었습니다.

프로젝트를 진행하는 도중,
Front-End 의 퍼블리싱이 끝난 후 Back-End 와 API 연동작업을 할려고 할때 프로젝트가 원활히 진행되지 않는다는것을 느끼고,
프로젝트 리더에게 부탁을하여 2022-11-12 일부터 프로젝트 리더를 임명받고 프로젝트를 마무리 하였습니다.`,
    developEnv: [
      'Next.js',
      'Typescript',
      'Styled-components',
      'Axios',
      'React-Query',
      'Figma',
    ],
    myRole: [
      '프로젝트 리더 (2차)',
      '카카오톡 소셜로그인(프론트) 구현',
      '이지포토 사이트 회원가입 페이지 구현',
      '의뢰디테일페이지 구현',
      '글작성페이지 및 수정하기 페이지 구현',
      '업로드 모달창 및 의뢰맡기기 모달창 구현',
      'AWS 도메인 연결 및 git actions 를 사용한 자동화배포 (S3 -> CloudFront -> Route53)',
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
    info: `주제는 "요즘같은 예측하기 힘든 날씨의 코디를 사용자가 저장하고, 볼 수 있게 하자" 입니다.
프로젝트 주제가 일교차가 심한 요즘 너무 공감되어서 재밌을것 같다고 느껴졌고 그렇게 시작하게 되었습니다.
체감온도는 상대적인 것이라 사용자의 후기를 저장하는것이 중요하다고 느껴졌고 그 기능을 주로 생각하여 개발을 하였습니다.
팀원은 현재 프론트3, 백엔드1 로 구성되어 있습니다.`,
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
    myRole: [
      'three-js 를 사용하여 3D 모델링 출력 구현',
      'EditPage UI 구현 및 기능구현 (자세한 사항은 Notion 확인)',
      '공용컴포넌트 (clothes box) 구현',
      'closetPage 등록 구현',
      'filter 에 따라 get 해오게 구현',
      `AWS 배포`,
      '옷장페이지에 관련된 api 렌더링최적화 구현 (자세한 사항은 Notion 확인)',
    ],
    link: { // Todo : AWS 링크 추가해야함
      github: 'https://github.com/potato-club/temperature-outfit',
    },
    // 사실상 12월5일에 끝난 프로젝트지만, 디자인 및 프로젝트 구조 변경을 하기로 결정하고 좀 더 추가작업중
  },
];
