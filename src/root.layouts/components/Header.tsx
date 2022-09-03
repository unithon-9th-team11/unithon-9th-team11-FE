import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledWrapper className="css-flex-center">
      <h1 className="header-title css-flex-center">TODO APP</h1>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header`
  width: 100%;
  height: 6rem;

  border-bottom: 1px solid #f2f2f2;

  .header-title {
    height: 100%;
    font-weight: 600;
    font-size: 2.2rem;
    color: #25f1aa;
  }
`;
