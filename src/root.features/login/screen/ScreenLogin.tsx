import React from 'react';
import { TodoLogo, LoginForm, JoinMessage } from '@FeatureLogin/components';
import useRedirectUserEffect from '@FeatureLogin/hooks/useRedirectUserEffect';

const ScreenLogin = () => {
  useRedirectUserEffect();

  return (
    <>
      <TodoLogo />
      <LoginForm />
      <JoinMessage />
    </>
  );
};

export default ScreenLogin;
