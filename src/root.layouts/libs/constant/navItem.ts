export type navItemType = {
  title: string;
  path: string;
};

// TODO 개선
export const logOutNavItems: navItemType[] = [
  // { title: '궁합보기', path: '/result/asd' },
  { title: '마이랭킹', path: '/ranking' },
  { title: '로그인', path: '/users/sign_in' },
  { title: '회원가입', path: '/users/sign_up' },
];

export const loginNavItems: navItemType[] = [
  { title: '궁합보기', path: '/result/' },
  { title: '마이랭킹', path: '/ranking' },
  { title: '로그아웃', path: '/' },
];
