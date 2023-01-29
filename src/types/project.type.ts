export type projectType = {
  thumbnail: string; // 슬라이드 메인에 나올 메인 이미지
  title: string; // 프로젝트 제목
  people: string; // 프로젝트 참여 인원 수
  date: string[]; // [시작기간, 종료기간]
  imageUrl: string[]; // 상세보기에 나올 이미지들 (편의상 현재는 파일명을 1,2,3 형식으로 줬지만, 그럴필요없음)
  function?: string;
  info: string; // 프로젝트 소개
  developEnv: string[]; // 개발환경
  myRole?: string[];
  link: linkType; // 관련 link 들 (현재는 github, aws)
};

export type linkType = {
  github?: string;
  githubPage?: string;
  aws?: string;
  [key: string]: string | undefined;
};