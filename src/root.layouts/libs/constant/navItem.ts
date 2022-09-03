export type navItemType = {
  title: string;
  path: string;
};

// TODO 개선
export const logOutNavItems: navItemType[] = [
  { title: '궁합보기', path: '/' },
  { title: '로그인', path: '/' },
  { title: '회원가입', path: '/' },
];

export const loginNavItems: navItemType[] = [
  { title: '궁합보기', path: '/' },
  { title: '마이랭킹', path: '/ranking' },
  { title: '로그아웃', path: '/' },
];
