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
  min-height: 85vh;
  width: 1200px;
  margin: 0 auto;
  /* padding: 0 4rem; */
  font-size: 1.6rem;
`;
