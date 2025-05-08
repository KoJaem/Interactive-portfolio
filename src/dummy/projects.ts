import { projectType } from 'src/types';

export const projects: projectType[] = [
  {
    thumbnail: 'zznpk.png',
    title: '짜릿한 선택! 짱픽!',
    people: '프론트 1 백엔드 1 디자이너 1',
    date: ['2025.02', 'ing'],
    imageUrl: [
      'zznpk1.png',
      'zznpk2.png',
      'zznpk3.png',
      'zznpk4.png',
      'zznpk5.png',
      'zznpk6.png',
      'zznpk7.png',
      'zznpk8.png',
      'zznpk9.png',
      'zznpk10.png',
    ],
    info: `<color>다양한 주제로 이상형월드컵을 생성 및 공유하고, 플레이 할 수 있는 플랫폼</color>입니다.
프론트엔드 1명, 백엔드 1명, 디자이너 1명으로 구성된 팀에서 실제 운영을 목표로 진행 중인 프로젝트입니다.
현재 <color>Google Play 프로덕션 심사를 통과</color>하였으며, 디자인 및 기능 검토를 마친 후 <color>2025년 5월 중순 정식 출시 예정</color>입니다.`,
    function: `<color>이상형 월드컵을 공유 및 플레이 하거나 카카오톡으로 로그인하여 나만의 이상형 월드컵을 생성</color>할 수 있습니다.
생성된 게임이나, 게임에 사용된 각각의 리소스에 대해 <color>댓글을 남기며 의견을 공유</color>할 수 있습니다.
마이페이지에서 <color>내가 만든 게임을 관리</color>하거나, 상대방에게 보이는 <color>프로필을 수정</color>할 수 있습니다.
<color>WebView 앱</color>에서도 동작이 가능합니다.`,
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
    imageUrl: [
      'picki-talki1.gif',
      'picki-talki2.gif',
      'picki-talki3.png',
      'picki-talki4.gif',
      'picki-talki5.png',
      'picki-talki6.png',
      'picki-talki7.png',
      'picki-talki8.png',
      'picki-talki9.gif',
      'picki-talki10.png',
      'picki-talki11.png',
      'picki-talki12.gif',
      'picki-talki13.png',
      'picki-talki14.png',
      'picki-talki15.png',
      'picki-talki16.png',
      'picki-talki17.png',
      'picki-talki18.png',
      'picki-talki19.png',
    ],
    info: `웹 개발 동아리 <color>DND의 해커톤 대회에서 프리패스 특별상을 수상한 것을 계기로 DND 12기에 참여</color>하게 되었고,
프론트엔드 2명, 백엔드 2명, 디자이너 2명으로 구성된 팀에서 <color>8주간</color>(기획 4주, 개발 4주) <color>프로젝트를 진행</color>하였습니다.

<color>짧은 기간 안에 기획부터 배포까지 완료</color>해야 하는 만큼, <color>팀원과의 원활한 협업과 빠른 의사결정을 최우선으로 하여 프로젝트를 진행</color>하였습니다.
개발진행 8주 후, 타 외부 동아리 <color>Yapp 과 연합하여 오프라인 최종발표를 진행</color> 하였습니다.
`,
    function: `그룹 생성 및 초대 시스템: 최초 사용자가 <color>그룹을 생성</color>하고 <color>초대 코드를 공유하여 그룹이 활성화</color>됩니다.
1일 1질문 및 답변 시스템: 매일 한 명의 사용자가 <color>오늘의 질문자로 추첨되어 질문을 작성</color>하며, <color>나머지 그룹원들은 해당 질문에 대해 답변을 작성</color>합니다.
게이미피케이션 요소: <color>질문과 답변 작성 시 포인트가 쌓여 캐릭터가 성장</color>하며, 그룹원들이 함께 캐릭터를 성장시키는 방식으로 <color>지속적인 동기 부여를 제공</color>합니다.`,
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
      'PWA 앱 구현',
      '공용 컴포넌트 및 메인 UI 개발',
      '채널/시그널 페이지 구현',
      '배포 및 메타데이터 구성',
    ],
    link: {
      github: 'https://github.com/dnd-side-project/dnd-12th-4-frontend',
      deploy: 'https://picki-talki.site',
      'figma lo-fi':
        'https://www.figma.com/design/7hWMRfIBLwVNfEdsMahqeS/lo-fi?node-id=0-1&p=f&t=B6PLq00WgPROUKpa-0',
      figma:
        'https://www.figma.com/design/kU6cWZCX0dEIFgIGoLaO2J/DND-12-4-hi-fi?node-id=0-1&p=f&t=iJY28SghiVPnhUmi-0',
      notion:
        'https://petalite-globe-c6e.notion.site/DND-12-4-16c9edc7074d80d08f53fae99de453d1',
      '최종발표 Notion':
        'https://yapp-workspace.notion.site/673c811c3c074743910303610543a38e',
    },
  },
  {
    thumbnail: 'story-of-dreams.png',
    title: '꿈을 찾는 우리들의 이야기',
    people: '개인 프로젝트',
    date: ['2024.12', '2025.01'],
    imageUrl: [
      'story-of-dreams1.png',
      'story-of-dreams2.png',
      'story-of-dreams3.png',
      'story-of-dreams4.png',
      'story-of-dreams5.png',
      'story-of-dreams6.png',
      'story-of-dreams7.png',
    ],
    info: `이 프로젝트는 <color>AI 이미지 생성 기술을 활용한 스토리텔링 게임</color> 개발을 본격적으로 진행하기 위해 시작한 프로젝트입니다.

대학생 시절, 서울대학교 학생이 AI를 활용해 게임을 만들었다는 소식을 접한 후 직접 플레이해보고 나서, <color>스토리텔링 게임을 하나 만들어두면 asset 데이터만 바꿔 여러 게임으로 확장할 수 있겠다는 아이디어</color>를 떠올렸지만, 당시에는 디자인에 대한 역량이 부족해 구체적으로 실행하지는 못했었습니다.

이후, <color>Flutter 게임 프로젝트</color>를 진행하면서 <color>Stable Diffusion으로 이미지 asset을 제작하는 경험</color>을 하였고, 해당 아이디어를 실현에 옮기고자 이 프로젝트를 시작하게 되었습니다.

<color>Flutter</color> 및 <color>Flutter-Flame</color>을 활용해 <color>눈으로 보는 스토리텔링 형식의 게임</color>을 구현하였고,
캐릭터와 배경은 <color>Stable Diffusion</color>을 통해 직접 생성한 이미지로 구성하였습니다.

또한 실제 앱 출시를 통해 <color>2023년 11월 이후 생성된 개인 개발자 계정</color>에서는 <color>약 2주동안 비공개 테스트를 진행해야 한다는 점</color>과,
<color>admob</color>, <color>개인정보처리방침</color> 등 <color> 출시 시 필요한 요소들</color>을 직접 경험하며 배울 수 있었습니다.
`,
    function: `게임을 플레이하면서 <color>스토리를 감상</color>할 수 있으며,
갤러리 페이지에서 <color>진행된 스토리에 맞게 사용된 이미지들을 확인</color> 할 수 있고,
캐릭터 소개 페이지에서 <color>게임의 주요 인물들을 소개</color>하는 기능을 제공합니다.`,
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
    info: `이 프로젝트는 <color>"앱 개발에도 흥미를 가져보자"</color> 는 생각에서 시작하게 되었습니다.
취업 후 자연스럽게 줄어든 게임 플레이 시간을 대신해, <color>직접 게임을 개발해보자는 단순한 발상으로 1인 개발을 시작</color>하였습니다.

초기에는 <color>Flutter</color>와 <color>Flutter-Flame</color>에 대한 기초 개념을 익히기 위해 강의를 참고하여 <color>Pixel Adventure</color>를 구현하였고,
이후 <color>AI가 이미지 생성 기술</color>에 대한 유튜브 콘텐츠를 접하면서 <color>Stable Diffusion</color>을 활용해 <color>캐릭터와 배경 이미지를 생성</color>하고,
이를 바탕으로 <color>스토리텔링 형식의 게임 제작 가능성</color> 발견하게 되었습니다.

※ 모바일 게임을 염두에 두고 제작하였으나, <color>Flutter는 웹 배포도 지원</color>하기 때문에 포트폴리오 사이트에서 PC로도 간단히 플레이해보실 수 있도록 구성하였습니다.
`,
    function: `pixel adventure : 점프게임 (<color>Tiled 를 사용하여 스테이지 구현</color>)
스토리텔링 게임 : 스토리텔링 게임 / 추 후 image, text 등의 <color>assets 을 수정해서 쉽게 또 다른 스토리텔링 게임을 만들 수 있도록 구현</color>`,
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
    imageUrl: [
      'flutter_calendar1.png',
      'flutter_calendar2.png',
      'flutter_calendar3.png',
      'flutter_calendar4.png',
      'flutter_calendar5.png',
      'flutter_calendar6.png',
      'flutter_calendar7.png',
      'flutter_calendar8.png',
      'flutter_calendar9.png',
      'flutter_calendar10.png',
      'flutter_calendar11.png',
      'flutter_calendar12.png',
      'flutter_calendar13.png',
      'flutter_calendar14.png',
      'flutter_calendar15.gif',
      'flutter_calendar16.png',
      'flutter_calendar17.png',
      'flutter_calendar18.png',
      'flutter_calendar19.png',
      'flutter_calendar20.png',
    ],
    info: `이 프로젝트의 주제는 <color>"사내 연차 관리를 앱으로 손쉽게 관리하자"</color> 입니다.

<color>Flutter</color>에 흥미를 가지게 되면서 공부를 목적으로 회사 팀원에게 제안하여 평일 저녁이나 주말에 온라인 회의를 통해 진행한 프로젝트입니다.

당시에 근무하고 있는 회사에서는 연차를 사용할 때 <color>구글 캘린더에 일정을 등록</color>하고, 남은 연차는 엑셀로 관리하고 있었는데,
이로 인해 신청 후 누락이 되는 등, <color>휴가를 관리 해주시는분의 번거로움도 있어 이를 해결</color>하고자 프로젝트를 시작하였습니다.

프론트 개발이 완료된 이후, 사내에서 사용하기 위해 백엔드 개발자 분들께서 개발을 진행 해주시다가 보류처리가 되었던 아쉬운 프로젝트 입니다.`,
    function: `<color>구글 캘린더 API를 연동하여 조직원들이 직접 일정을 등록할 수 있고, 이를 한눈에 확인할 수 있습니다.</color>
관리자는 <color>조직원들을 추가 및 삭제</color>, <color>연차관리를 할 수 있으며</color>,
조직원은 마이페이지에서 <color>본인의 정보를 수정</color>하거나 <color>일정 확인 및 휴가요청</color>을 할 수 있습니다.`,
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
    info: `프로젝트의 주제는 <color>"사진 이렇게 편집해주세요!"</color> 같은 글을 SNS 에서 몇번씩 본적이 있는데,
이러한 주제를 전담마크한 사이트를 한번 만들어보자는 생각에서 진행하게 되었습니다.
저에게는 되게 깊은 의미가 있던 프로젝트로, <color>백엔드 개발자와 협업을 처음 하는 프로젝트</color> 였기에
<color>API연동 및 백엔드 개발자와 협업을 적극적으로 진행</color>하였습니다.

프로젝트를 진행하는 도중,
Front-End 의 퍼블리싱이 끝난 후 Back-End 와 API 연동작업을 할려고 할때 <color>프로젝트가 원활히 진행되지 않는다는것을 느끼고</color>,
프로젝트 리더에게 부탁을하여 <color>2022-11-12 부터 프로젝트 리더를 임명받고 프로젝트를 마무리 하였습니다.</color>
예상치않게 <color>프로젝트 리더를 맡게되어</color> 힘들었지만, 그만큼 많은것을 공부하고 부딪혀보며 제 성장에 많은 도움을 준 고마운 프로젝트 입니다.`,
    function: `카카오톡 소셜로그인을 통해 로그인을 하고, 사이트 내 회원가입을 할 수 있습니다.

회원가입 시 <color>의뢰자 또는 디자이너 중에 직업을 선택할 수 있습니다.</color>
의뢰자로 직업을 선택할 시 <color>게시글을 작성하여 디자이너에게 커미션을 요청</color>할 수 있고,
디자이너는 의뢰자의 글에 <color>커미션을 받아서 의뢰를 처리</color>할 수 있습니다.

게시글을 작성할때는 <color>사진을 공개 또는 비공개로 처리</color>할 수 있으며, <color>비공개로 처리할 시 사진은 의뢰를 받은 디자이너만 볼 수 있습니다.</color>
디자이너가 커미션해준 <color>작업물을 보고 의뢰자는 후기를 남길 수 있고</color>, 의뢰자는 언제든 디자이너로, 디자이너는 언제든 의뢰자로 <color>직업을 변경할 수 있습니다.</color>
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
    title: 'Cody Diary',
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
    info: `프로젝트의 주제는 <color>"요즘같은 예측하기 힘든 날씨의 코디를 사용자가 저장하고, 볼 수 있게 하자"</color> 입니다.
일교차가 심한 요즘, 이러한 주제의 프로젝트로 개발하면 너무 재밌을것 같다고 느껴졌고 그렇게 시작하게 되었습니다.

<color>체감온도는 상대적인 것이라 사용자의 후기를 저장하는것이 중요하다고 느껴졌고</color> 그 기능을 주로 생각하여 개발을 하였습니다.
<color>시맨틱 태그</color>, <color>제어/비제어 컴포넌트</color>, <color>사용자 경험</color> 등 디테일하게 신경써야 하는 부분들에 대해 공부하면서 개발을 진행하였기에
단순 기능을 개발하던때와 다르게 좀 더 성장할 수 있었던 프로젝트 입니다.
`,
    function: `구글아이디로 로그인을 할 수 있으며, 본인이 살고있는 <color>지역을 선택하여 현재 날씨 및 온도를 확인</color>할 수 있습니다.
옷장페이지에서 <color>본인이 가지고있는 옷을 등록</color>할 수 있으며,
옷을 등록한 후, <color>오늘날짜나 과거날짜에 무엇을 입었는지</color>, <color>옷장에 있는 옷과 오늘의 코디사진을 함께 업로드하고 후기 및 별점</color>을 남겨서
어떤 날씨 및 온도에 무엇을 입고갔는지 일기장처럼 적어놓고, <color>다음에 어떤옷을 입어야할지 참고할 수 있는 나만의 일기장 같은 사이트입니다.</color>
메인 페이지에서는 <color>오늘 날씨와 가장 유사한 순서대로 과거데이터들을 나열</color>해주고,
달력 페이지에서는 <color>코디를 등록한 날짜와 날씨 및 온도를 한눈에 확인</color>할 수 있으며, 클릭 시 그날의 코디를 볼 수 있게 해놓았습니다.

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
(저는 소개할 주제로 <color>패션전시회를 선택</color>했습니다)

<color>framer-motion</color> 라이브러리를 활용하여 만들었던, <color>제 첫 React 협업 프로젝트 입니다.</color>
컨셉이 아예 다른 사이트를 개개인이 디자인부터 완전히 새롭게 작업한 뒤, 마지막에 합치는 형식으로 진행되었기에
<color>동일한 개발환경이여도 실력에 따라 결과물이 완전히 다르게 나올 수 있다</color>는걸 깨달을 수 있었고,
<color>빨리 성장하고 싶다는 계기</color>를 준 프로젝트 입니다.

현업에서 일을 하고있는 리더가 있었는데, 그 리더또한 팀원들의 피드백을 적극 수용하는 모습을 보고,
실력있는 개발자가 되려면 <color>Leader-ship</color> 만큼 <color>Follower-ship</color> 이 얼마나 중요한지 등 많은 것을 느끼게 해준 프로젝트 입니다.
프로젝트를 같이 진행한 팀원들에게 여러 피드백과 도움을 받고 많은 성장을 할 수 있었고
저도 언젠가 <color>팀원들에게 도움되는 피드백을 해줄 수 있는 역량이 있는 사람이 되고싶다</color>고 느꼈습니다.`,
    function: `홈 화면에서 <color>사진이나 상단바의 브랜드 로고를 누르면 해당 브랜드의 대한 소개 및 내용을 인터렉티브하게 확인</color>하실 수 있는 간단한 소개 사이트입니다.
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
반려동물에 대한 <color>일상이야기를 공유할 수 있는 사이트</color> 입니다.

기본적인 커뮤니티 사이트의 구조를 생각하면서 만든 프로젝트로,
단순히 디자인대로 UI 를 만들던 이전 프로젝트와는 다르게 <color>어떤 기능이 있으면 좋겠다는 생각</color>을 하며 진행한 프로젝트 입니다.

처음 계획한대로 개발이 진행되지는 않아서 아쉬운점이 많았던 프로젝트지만,
<color>기능적인 부분을 추가할때 고려해야 할 부분들이 있다는 시야</color>를 늘려준 고마운 프로젝트 입니다.
`,
    function: `반려동물을 주제로 정보 및 일상에 대한<color>글을 등록하여 공유할 수 있습니다.</color>
<color>댓글 기능이 있어 게시글 내에서 사용자들끼리 소통</color>을 할 수 있고,
궁금한 정보가 있으면 <color>검색기능을 통해 해당 키워드에 맞는 글을 검색</color>할 수 있습니다.`,
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
