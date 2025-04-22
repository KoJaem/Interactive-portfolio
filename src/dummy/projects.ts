import { projectType } from 'src/types';

export const projects: projectType[] = [
  {
    thumbnail: 'zznpk.png',
    title: '짜릿한 선택! 짱픽!',
    people: '프론트 1 백엔드 1 디자이너 1',
    date: ['2025.02', 'ing'],
    imageUrl: [],
    info: `다양한 주제로 이상형월드컵을 생성하고 플레이할 수 있는 콘텐츠 기반 웹 서비스입니다.
    프론트엔드 1명, 백엔드 1명, 디자이너 1명으로 구성된 팀에서 실제 운영을 목표로 진행 중인 프로젝트입니다.
    현재는 와이어프레임 단계로, 투박한 디자인으로 구성되어 있으며 디자인 구현 및 세부적인 이슈들을 작업 중입니다.`,
    function: `- 이상형월드컵 생성 기능
    - 사용자 플레이 기능
    - 게임 진행 UI
    - 비공개 테스트(하이브리드 앱) 진행`,
    developEnv: [
      'Next.js',
      'TailwindCSS',
      'Orval (OpenAPI Generator)',
      'npm',
      'React Query',
      'zustand',
      'framer-motion',
      'Github Actions',
      'Vercel',
      'React Native (Expo)',
    ],
    myRole: [
      '프로젝트 리더',
      '개발 환경 자동화 세팅',
      'Slack Notification 구현',
      '프론트엔드 전체 개발 (Web, WebView)',
      '사용자 경험 개선 (Streaming SSR)',
      'Firebase 기반 App Notification',
    ],
    link: {
      // github: 'https://github.com/Rookeys/balance-game-front',
      figma:
        'https://www.figma.com/design/K7KQT0CDKhgNoqZ9eYpmuy/%EC%A7%B1%ED%94%BD?node-id=0-1&p=f&t=nNz3pK6rOGuDFfGc-0',
      deploy: 'https://zznpk.com',
    },
  },
  {
    thumbnail: 'picki-talki.png',
    title: '피키토키',
    people: '프론트 2 백엔드 2 디자인 2',
    date: ['2025.01', '2025.02'],
    imageUrl: [],
    info: `웹 개발 동아리 DND의 해커톤 대회에서 특별상을 수상한 것을 계기로 DND 12기에 참여하게 되었고, 
  프론트엔드 2명, 백엔드 2명, 디자이너 2명으로 구성된 팀에서 8주간(기획 4주, 개발 4주) 프로젝트를 수행했습니다.

  짧은 기간 안에 기획부터 배포까지 완료해야 하는 만큼, 팀원과의 원활한 협업과 빠른 의사결정을 최우선으로 하여 프로젝트를 진행했습니다.`,
    function: `- 메인 페이지
- 채널 페이지
- 시그널 작성 및 응답 작성 페이지
- 공용 컴포넌트 구조 설계 및 구현
- PWA 기능
- 자동화된 배포 시스템`,
    developEnv: [
      'Next.js',
      'TailwindCSS',
      'zustand',
      'framer-motion',
      'Orval',
      'React-Query',
      'Serwist',
    ],
    myRole: [
      '프로젝트 리더',
      'API 코드 세팅 (Orval)',
      'PWA 구현',
      '공용 컴포넌트 및 메인 UI 개발',
      '채널/시그널 페이지 구현',
      '배포 및 메타데이터 구성',
    ],
    link: {
      github: 'https://github.com/dnd-side-project/dnd-12th-4-frontend',
      'figma lo-fi':
        'https://www.figma.com/design/7hWMRfIBLwVNfEdsMahqeS/lo-fi?node-id=0-1&p=f&t=B6PLq00WgPROUKpa-0',
      figma:
        'https://www.figma.com/design/kU6cWZCX0dEIFgIGoLaO2J/DND-12-4-hi-fi?node-id=0-1&p=f&t=iJY28SghiVPnhUmi-0',
      deploy: 'https://picki-talki.site',
    },
  },
  {
    thumbnail: 'story-of-dreams.png',
    title: '꿈을 찾는 우리들의 이야기',
    people: '개인 프로젝트',
    date: ['2024.12', '2025.01'],
    imageUrl: [],
    info: `대학생 때 서울대학교 학생이 AI를 활용해 게임을 하나 만들었다는 소식을 접한 후,
  게임을 한번 플레이해보고 나서 스토리텔링 게임을 만들어두면 이미지나 음성, 스토리 등의 Asset 데이터만 수정하면
  비슷한 게임을 여러 개 만들 수 있겠다는 아이디어를 얻었습니다.
  
  이를 바탕으로 '눈으로 보는 스토리텔링' 형식의 게임을 개발하였으며, 
  플레이어는 간단한 조작으로 스토리를 감상할 수 있습니다.
  `,
    function: `게임을 플레이하면서 스토리를 감상할 수 있으며, 
  갤러리 페이지에서 이미지들을 한번에 확인하고, 캐릭터 소개 페이지에서 게임의 주요 인물들을 소개하는 기능을 제공합니다.`,
    developEnv: [
      'Flutter',
      'Flutter-Flame',
      'Stable Diffusion',
      'Shared Preferences',
    ],
    myRole: ['개인 프로젝트 (전체 구현)'],
    link: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.kojaem.storyofdreams',
    },
  },
  {
    thumbnail: 'flutter_games.png',
    title: 'Flutter 게임 프로젝트',
    people: '개인 프로젝트',
    date: ['2023.05', '2024.03'],
    imageUrl: [
      'flutter_games2.png',
      'flutter_games3.png',
      'flutter_games4.png',
      'flutter_games5.png',
      'flutter_games6.png',
      'flutter_games7.png',
    ],
    info: `이 프로젝트는 <color>앱개발에도 흥미를 가져보자</color> 라는 생각에 시작하게 되었습니다.
취업을 하게되면서 자연스럽게 취미생활이던 게임을 줄이게 되었는데,
<color>게임을 플레이 할 시간에 게임을 개발해보자</color> 라는 단순한 생각에서 1인 개발을 시작하게 되었습니다.

처음에는 Flutter-Flame 라이브러리에 대해 기초적인 개념을 익히고 싶어서 강의를 보며
pixel adventure 를 만들어보았었는데, 그 후에 우연히 보게 된 유튜브에서 <color>AI 가 그려주는 그림</color>에 관련한 내용을 접하게 되면서
<color>stable-diffusion</color> 을 활용한 캐릭터와 배경 이미지를 만들어서 스토리텔링 형식의 게임을 만들어보았습니다.

모바일 게임을 생각하여 만들었지만,
Flutter 로 개발을 진행하였기 때문에 PC버전으로도 손쉽게 배포 할 수 있어서
포트폴리오 사이트 메인페이지에서 PC 로 간단하게 플레이 해보실 수 있도록 설정해두었습니다.

※ 모바일 앱 배포용으로 만든것을 PC 버전으로 배포한것이기 때문에, 폰트가 깨지는등의 약간의 호환성 문제가 있을 수 있습니다
`,
    function: `pixel adventure : 점프게임 (<color>Tiled 를 사용하여 스테이지 구현</color>)
스토리텔링 게임 : 스토리텔링 게임 / 추 후 image, text 등의 <color>assets 을 넣어서 쉽게 스토리텔링 게임을 만들 수 있도록 구현</color>`,
    developEnv: ['Flutter', 'Flutter-flame', 'Jenny'],
    myRole: ['개인 프로젝트 (전체 구현)'],
    link: {
      // game: 'https://d2ql7g3zfmsy1e.cloudfront.net',
      // game2: 'https://d3aqn2y3q7oegc.cloudfront.net',
    },
    action: {
      game: 'https://d2qe02gk5ngtdj.cloudfront.net',
      game2: 'https://d3aqn2y3q7oegc.cloudfront.net',
    },
  },
  {
    thumbnail: 'flutter_calendar.png',
    title: 'Flutter 일정관리 앱',
    people: '프론트 2',
    date: ['2023.09', '2024.02'],
    imageUrl: [],
    info: `이 프로젝트의 주제는 <color>"사내 연차 관리를 앱으로 손쉽게 관리하자"</color> 입니다.

제가 근무하고 있는 회사에서는 연차를 사용할 때 구글 캘린더에 일정을 등록하고, 남은 연차는 엑셀로 관리하고 있었는데,
이로 인해 신청 후 누락되기도 하고, 관리하는 분의 번거로움도 있어 이를 해결하고자 프로젝트를 시작하였습니다.

Flutter에 흥미를 가지게 되면서 공부를 목적으로 회사 팀원에게 제안하여 평일 저녁이나 주말에 온라인 회의를 통해 진행한 프로젝트입니다.

프론트 개발이 완료된 이후, 사내에서 사용하기 위해 백엔드 개발자 분들께서 개발을 진행 해주시다가 보류처리가 되었던 아쉬운 프로젝트 입니다.`,
    function: `<color>구글 캘린더 API를 연동하여 조직원들이 직접 일정을 등록하고, 이를 한눈에 확인할 수 있도록 구현</color>하였습니다.
관리자는 조직원들을 추가 및 연차관리를 할 수 있으며,
조직원은 개인 마이페이지에서 본인의 정보를 수정하거나 일정 확인 및 휴가요청을 할 수 있습니다.`,
    developEnv: ['Flutter', 'Firebase', 'Google Calendar v3 API'],
    myRole: [
      '메인페이지 구현',
      '캘린더 페이지 및 일정등록 기능 구현 (Google Calendar API 연동)',
      '마이페이지 및 조직원 수정 UI 구현',
    ],
    link: {
      github: 'https://github.com/Rookeys/Calendar-App/tree/main',
      figma:
        'https://www.figma.com/proto/mUqlNE7BchDod0LKAR8M83/Rookeys?type=design&node-id=902-5724&t=P6MB0kRfn4bywl0F-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=902%3A5724&show-proto-sidebar=1',
    },
  },
  {
    thumbnail: 'easyphoto.png',
    title: '포토샵 커미션 사이트',
    people: '프론트 3, 백엔드 2',
    date: ['2022.03', '2023.01'],
    imageUrl: [
      'easyphoto1.png',
      'easyphoto2.png',
      'easyphoto3.png',
      'easyphoto4.png',
      'easyphoto5.png',
      'easyphoto6.png',
      'easyphoto7.png',
      'easyphoto8.png',
    ],
    info: `<color>프로젝트의 주제는 "사진 이렇게 편집해주세요!"</color> 같은 글을 SNS 에서 몇번씩 본적이 있는데,
이러한 주제를 전담마크한 사이트를 한번 만들어보자는 생각에서 진행하게 되었습니다.
저에게는 되게 깊은 의미가 있던 프로젝트로, 백엔드 개발자와 협업을 처음 하는 프로젝트 였기에
API연동 및 백엔드 개발자와 협업을 적극적으로 진행하였습니다.

프로젝트를 진행하는 도중,
Front-End 의 퍼블리싱이 끝난 후 Back-End 와 API 연동작업을 할려고 할때 프로젝트가 원활히 진행되지 않는다는것을 느끼고,
프로젝트 리더에게 부탁을하여 <color>2022-11-12 일부터 프로젝트 리더를 임명받고 프로젝트를 마무리 하였습니다.</color>
힘들었지만, 그만큼 많은것을 공부하고 부딪혀보며 제 성장에 많은 도움을 준 고마운 프로젝트 입니다.`,
    function: `카카오톡 소셜로그인을 통해 로그인을 하고, 사이트 내 회원가입을 할 수 있습니다.
<color>회원가입 시 의뢰자 또는 디자이너 중에 직업을 선택할 수 있습니다.</color>
의뢰자로 직업을 선택할 시 게시글을 작성하여 디자이너에게 커미션을 부탁할 수 있고,
디자이너는 의뢰자의 글에 커미션을 받아서 의뢰를 처리할 수 있습니다.
게시글을 작성할때는 사진을 공개 또는 비공개로 처리할 수 있으며,
<color>비공개로 처리할 시 사진은 의뢰를 받은 디자이너 1명에게만 보여지게 처리하였습니다.</color>
디자이너가 커미션해준 작업물을 보고 의뢰자는 후기를 남길 수 있게 해놓았으며,
의뢰자는 언제든 디자이너로, 디자이너는 언제든 의뢰자로 직업을 변경할 수 있게도 구현해놨습니다.
`,
    developEnv: [
      'Next.js',
      'Typescript',
      'Styled-components',
      'Axios',
      'React-Query',
      'Figma',
      'React-Hook-Form',
      'React-Redux',
    ],
    myRole: [
      '프로젝트 리더 (2차)',
      '이지포토 사이트 회원가입 페이지 구현',
      '카카오톡 소셜로그인(프론트) 구현',
      '의뢰디테일페이지 구현',
      '글작성페이지 및 수정하기 페이지 구현',
      '업로드 모달창 및 의뢰맡기기 모달창 구현',
      'AWS 도메인 연결 및 git actions 를 사용한 자동화배포 (S3 -> CloudFront -> Route53)',
    ],
    link: {
      github: 'https://github.com/potato-club/photoshop-commission-site',
      // aws: 'https://easyphoto.site/',
    },
  },
  {
    thumbnail: 'weather-outfit.png',
    title: '날씨별 코디추천 사이트',
    people: '프론트 3, 백엔드 1',
    date: ['2022.05', '2023.04'],
    imageUrl: [
      'weather-outfit1.png',
      'weather-outfit2.png',
      'weather-outfit3.png',
      'weather-outfit4.png',
      'weather-outfit5.png',
      'weather-outfit6.png',
      'weather-outfit7.gif',
      'weather-outfit8.gif',
      'weather-outfit9.gif',
      'weather-outfit10.gif',
      // 'weather-outfit11.png',
    ],
    info: `주제는 <color>"요즘같은 예측하기 힘든 날씨의 코디를 사용자가 저장하고, 볼 수 있게 하자"</color> 입니다.
프로젝트 주제가 일교차가 심한 요즘, 이러한 주제의 프로젝트로 개발하면 너무 재밌을것 같다고 느껴졌고 그렇게 시작하게 되었습니다.

체감온도는 상대적인 것이라 사용자의 후기를 저장하는것이 중요하다고 느껴졌고 그 기능을 주로 생각하여 개발을 하였습니다.
시맨틱 태그, 제어/비제어 컴포넌트 등 디테일하게 신경써야 하는 부분들에 대해 공부하면서 개발을 진행하였기에
단순 기능을 개발하던때와 다르게 좀 더 성장할 수 있었던 프로젝트 입니다.
`,
    function: `구글아이디로 로그인을 할 수 있으며, 본인이 살고있는 지역을 선택하여 현재 날씨 및 온도를 확인할 수 있습니다.
옷장페이지에서 본인이 가지고있는 옷을 등록할 수 있으며,
옷을 등록한 후, <color>오늘날짜나 과거날짜에 무엇을 입었는지 옷장에 있는 옷과 오늘의 코디사진을 함께 업로드하고 후기 및 별점</color>을 남겨서
어떤 날씨 및 온도에 무엇을 입고갔는지 일기장처럼 적어놓고, <color>다음에 어떤옷을 입어야할지 참고로 쓰는 나만의 일기장 같은 사이트입니다.</color>
메인 페이지에서는 <color>오늘 날씨와 가장 유사한 순서대로 과거데이터들을 나열</color>해주고,
달력 페이지에서는 코디를 등록한 날짜와 날씨 및 온도를 한눈에 확인할 수 있으며, 클릭 시 그날의 코디를 볼 수 있게 해놓았습니다.

※ 메인페이지에 날씨 이모지를 클릭하면 <color>3D 모델링을 볼 수 있는 이스터에그를 숨겨놓았습니다.</color>`,
    developEnv: [
      'Next.js',
      'TypeScript',
      'Emotion',
      'Recoil',
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
    link: {
      github: 'https://github.com/potato-club/temperature-outfit',
    },
  },
  {
    thumbnail: 'fashion-exhibition.png',
    title: '인터렉티브 패션 전시회 웹',
    people: '프론트 4 (개인프로젝트 + 피드백)',
    date: ['2021.10', '2021.12'],
    imageUrl: [
      'fashion-exhibition1.png',
      'fashion-exhibition2.png',
      'fashion-exhibition3.png',
      'fashion-exhibition4.png',
      'fashion-exhibition5.png',
      'fashion-exhibition6.png',
      'fashion-exhibition7.png',
      'fashion-exhibition8.gif',
    ],
    info: `프로젝트의 주제는 <color>"사용자에게 좋은 경험을 줄 수 있는 Interactive 한 소개 사이트를 만들어보자"</color> 입니다.
(저는 소개할 주제로 패션전시회를 선택했습니다)

Framer 라는 애니메이션 라이브러리를 활용하여 만들었던, <color>제 첫 React 협업 프로젝트 입니다.</color>
컨셉이 아예 다른 사이트를 개개인이 디자인부터 완전히 새롭게 작업한 뒤, 마지막에 합치는 형식으로 진행되었기에
<color>동일한 개발환경이여도 실력에 따라 결과물이 완전히 다르게 나올 수 있다</color>는걸 깨달을 수 있었고,
<color>빨리 성장하고 싶다는 계기</color>를 준 프로젝트 입니다.

현업에서 일을 하고있는 리더가 있었는데, 그 리더또한 팀원들의 피드백을 적극 수용하는 모습을 보고,
실력있는 개발자가 되려면 Leader-ship 만큼 Follower-ship 이 얼마나 중요한지 등 많은 것을 느끼게 해준 프로젝트 입니다.
프로젝트를 같이 진행한 팀원들에게 여러 피드백과 도움을 받고 많은 성장을 할 수 있었고
저도 언젠가 <color>팀원들에게 도움되는 피드백을 해줄 수 있는 역량이 있는 사람이 되고싶다</color>고 느꼈습니다.`,
    function: `사이트에 들어가서 사진이나 상단바의 브랜드 로고를 누르면 해당 브랜드의 대한 소개 및 내용을 인터렉티브하게 확인하실 수 있는 간단한 소개 사이트입니다.
패션브랜드 소개에 <color>인터렉티브한 요소를 추가해 흥미를 더한 사이트</color>입니다.`,
    developEnv: ['React', 'TypeScript', 'Emotion', 'Framer-motion', 'Figma'],
    myRole: [
      'Figma 를 사용하여 페이지 UI 및 Interactive 애니메이션 구상',
      '구상한 디자인 전체 구현',
    ],
    link: {
      github: 'https://github.com/KoJaem/jolp-exhibition-fashion',
      deploy: 'https://kojaem.github.io/jolp-exhibition-fashion/',
      // https://artvelop.github.io/jolp-exhibition/
    },
  },
  {
    thumbnail: 'travel-with-pet.png',
    title: '반려동물 커뮤니티',
    people: '프론트 4, 백엔드 1',
    date: ['2022.03', '2022.06'],
    imageUrl: [
      'travel-with-pet1.png',
      'travel-with-pet2.png',
      'travel-with-pet3.png',
      'travel-with-pet4.png',
      'travel-with-pet5.png',
    ],
    info: `프로젝트의 주제는 <color>"반려동물을 사랑하는 사람들을 위한 커뮤니티를 만들어보자"</color> 입니다.
이 사이트에서는 반려동물과 함께 갈 수 있는 여행지, 식당, 숙박 등 여러시설에 대한 정보와
반려동물에 대한 일상이야기를 공유할 수 있는 사이트 입니다.

기본적인 커뮤니티 사이트의 구조를 생각하면서 만든 프로젝트로,
단순히 디자인대로 UI 를 만들던 이전 프로젝트와는 다르게 <color>어떤 기능이 있으면 좋겠다는 생각</color>을 하며 진행한 프로젝트 입니다.

처음 계획한대로 개발이 진행되지는 않아서 아쉬운점이 많았던 프로젝트지만,
<color>기능적인 부분을 추가할때 고려해야 할 부분들이 있다는 시야</color>를 늘려준 고마운 프로젝트 입니다.
`,
    function: `반려동물을 주제로, <color>정보 및 일상에 대한 글을 등록하여 공유할 수 있는 커뮤니티 사이트</color>입니다.
댓글 기능이 있어 게시글 내에서 사용자들끼리 소통을 할 수 있고,
궁금한 정보가 있으면 검색기능을 통해 해당 키워드에 맞는 글을 검색할 수 있게 했습니다.`,
    developEnv: ['Next.js', 'TypeScript', 'Styled-components', 'Figma'],
    myRole: [
      '정보(메인)페이지, 일상 리스트 페이지 구현',
      '공용 컴포넌트 (포토카드)',
      '더미데이터 설정',
      '페이지네이션 구현 (React-js-pagination)',
      'React 멘토링',
    ],
    link: {
      github: 'https://github.com/potato-club/travel-with-pet',
      // aws: 'https://d1ql6v5yorw07d.cloudfront.net/',
    },
  },
];
