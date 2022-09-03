import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthCheck from '@RootHooks/useAuthCheck';

const useRedirectUserEffect = () => {
  const router = useRouter();
  const loggedIn = useAuthCheck();

  // 로그인 된 유저 접근 방어
  useEffect(() => {
    if (loggedIn) router.push('/');
  }, [loggedIn, router]);
};

export default useRedirectUserEffect;
