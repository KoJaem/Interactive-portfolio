export type simpleInfoType = {
  title: string;
  date: string[];
  topic: string;
  intro: string;
  developEnv: string[];
  myRole: string[];
};

export type detailInfoType = simpleInfoType & {
  github: string;
  achieve: string[];
  review: string;
};
