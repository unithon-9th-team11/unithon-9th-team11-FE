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
  margin: 0;
  padding: 0 4rem;
  font-size: 1.6rem;
`;
