import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Header, Footer } from '@RootLayouts/components';

const AppLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <StyledWrapper>{children}</StyledWrapper>
      <Footer />
    </>
  );
};

export default AppLayout;

const StyledWrapper = styled.main`
  min-height: 100vh;
  width: 1200px;
  margin: 0 auto;
  font-size: 1.6rem;
`;
