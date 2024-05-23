import { projectType } from 'src/types';

export const projects: projectType[] = [
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
      'weather-outfit7.png',
      'weather-outfit8.png',
      'weather-outfit9.png',
      'weather-outfit10.png',
      'weather-outfit11.png',
    ],
    info: `주제는 <color>"요즘같은 예측하기 힘든 날씨의 코디를 사용자가 저장하고, 볼 수 있게 하자"</color> 입니다.
프로젝트 주제가 일교차가 심한 요즘 너무 공감되어서 재밌을것 같다고 느껴졌고 그렇게 시작하게 되었습니다.
<color>체감온도는 상대적인 것이라 사용자의 후기를 저장하는것이 중요</color>하다고 느껴졌고 그 기능을 주로 생각하여 개발을 하였습니다.
AWS EC2 에 배포완료 후, 실제 운영 예정이였으나, 해당 프로젝트에서는 SSR 을 사용하지 않으므로
프론트, 백엔드를 S3, EC2 로 분리하자는 의견을 제시하였고, 그로인한 구조변경 및 디자인수정을 진행중입니다.`,
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
    // Todo 삭제
    thumbnail: 'street-vendor.png',
    title: '손안의 노점',
    people: '프론트 3, 백엔드 1, 디자이너2',
    date: ['2023.01', '2023.11'],
    imageUrl: [
      'street-vendor1.png',
      'street-vendor2.png',
      'street-vendor3.png',
    ],
    info: `이 프로젝트는 <color>대부분의 길찾기 어플에는 붕어빵, 타코야끼 등 여러 포장마차의 대한 정보가 나오지 않는데,</color>
<color>이러한 점을 공략하여 길거리 노점의 관한 앱을 만들어보자</color> 라는 생각으로 시작하게 된 프로젝트입니다.
아직 프로젝트 초기단계지만 정말 기대가 되는 프로젝트이며, 디자이너 두분과 함께 XD 및 Figma 를 통해 협업 진행중입니다.
`,
    function: `<color>손님은 붕어빵, 타코야끼 등의 노점을 쉽게 찾아서 좋고,</color>
<color>사장님은 이 어플을 통해 손님을 좀 더 유입시킬 수 있다는 점이 이 앱의 핵심 기능</color>입니다.
구글 로그인으로 로그인을 할 수 있으며, 사장앱, 손님앱을 분리하여 작업할 계획이며,
<color>손님들이 가게가 있다고 제보하는것이 아닌, 사장님이 직접 가게를 등록함으로써</color>
<color>손님들이 앱의 정보를 보고 갔다가 가게가 없는 상황을 방지하였습니다.</color>
`,
    developEnv: [
      'Next.js',
      'TypeScript',
      'styled-components',
      'Recoil',
      'React-Hook-Form',
      'React-Query',
      'nx workspace',
      'react-spring',
      'react-native (webView)',
      'Figma',
    ],
    myRole: [
      '가게 상세페이지 UI 및 기능 구현',
      '장바구니 및 주문하기 UI 및 기능 구현',
      'TimePicker 구현',
      '※ 작업중인 프로젝트 이므로 추 후 추가 될 예정입니다.',
    ],
    link: {
      github: 'https://github.com/potato-club/street-vendor-front',
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
Framer 라는 리액트 라이브러리를 활용하여 만들었던, <color>제 첫 React 협업 프로젝트 입니다.</color>
컨셉이 아예 다른 사이트를 개개인이 디자인부터 완전히 새롭게 작업한 뒤,
마지막에 합치는 형식으로 진행되었기에
<color>동일한 개발환경이여도 실력에 따라 결과물이 완전히 다르게 나올 수 있다</color>는걸 알게 해주었으며,
<color>빨리 성장하고 싶다는 계기</color>를 준 프로젝트 입니다.
또한, 이 프로젝트를 진행하면서 여러가지 배운점이 많았고, 아쉬운점도 많았기에
실력있는 개발자가 되려면 Leader-ship 만큼
Follow-ship 이 얼마나 중요한지 등 많은 것을 느끼게 해준 프로젝트 입니다.
프로젝트를 같이 진행한 조원들에게 여러 피드백과 도움을 받고 많은 성장을 할 수 있었고
저도 언젠가 <color>"팀원들에게 피드백을 해줄 수 있는 역량이 있는 사람이 되고싶다"</color>고 느꼈습니다.`,
    function: `사이트에 들어가서 사진이나 상단바의 브랜드 로고를 누르면 해당 브랜드의 대한 소개 및 내용을 인터렉티브하게 확인하실 수 있는 간단한 소개 사이트입니다.
패션브랜드 소개에 <color>인터렉티브한 요소를 추가해 흥미를 더한 사이트</color>입니다.`,
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
프로젝트 팀원들의 자신있는 기술스택이 전부 달랐기에, 서로 도움을 주면서 성장할 수 있었습니다.
또한, 리액트를 처음 접해보는 인원을 멘토링 해주면서 <color>내 코드를 다른사람에게 쉽게 설명하는 역량도 향상되는 계기</color>가 되었습니다.
하지만, 프로젝트가 조금은 흐지부지 하게 끝난점이 있다고 생각되어, 아쉬움이 많이 남는 프로젝트이기도 합니다.`,
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
  {
    thumbnail: 'flutter_games.png',
    title: 'Flutter 게임 프로젝트',
    people: '개인 프로젝트',
    date: ['2023.05', '2024.03'],
    imageUrl: ['flutter_games1.png'],
    info: `이 프로젝트는 <color>앱개발에도 흥미를 가져보자</color> 라는 생각에 시작하게 되었습니다.
취업을 하게되면서 자연스럽게 취미생활이던 게임을 줄이게 되었는데,
<color>게임을 플레이 할 시간에 게임을 개발해보자</color> 라는 단순한 생각에서 1인 개발을 시작하게 되었습니다.
처음에는 Flutter-Flame 라이브러리에 대해 기초적인 개념을 익히고 싶어서 강의를 보며
pixel adventure 를 만들어보았었는데, 그 후에 우연히 보게 된 유튜브에서 <color>AI 가 그려주는 그림</color>에 관련한 내용을 접하게 되면서
<color>stable-diffusion</color> 을 활용한 캐릭터와 배경 이미지를 만들어서 스토리텔링 형식의 게임을 만들어보았습니다.
모바일 게임을 생각하여 만들었지만, Flutter 로 개발을 진행하였기 때문에 이 사이트에서 PC 로 간단하게 플레이 해보실 수 있습니다.
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
      game: 'https://d2ql7g3zfmsy1e.cloudfront.net',
      game2: 'https://d3aqn2y3q7oegc.cloudfront.net',
    },
  },
];
