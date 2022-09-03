import React from 'react';
import { JoinForm, TodoLogo } from '@FeatureLogin/components';
import useRedirectUserEffect from '@FeatureLogin/hooks/useRedirectUserEffect';

const ScreenJoin = () => {
  useRedirectUserEffect();

  return (
    <>
      <TodoLogo />
      <JoinForm />
    </>
  );
};

export default ScreenJoin;
