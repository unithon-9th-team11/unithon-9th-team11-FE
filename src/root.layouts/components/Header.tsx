import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

const Header = () => {
  return (
    <StyledWrapper>
      <h1 className="header-title">
        <div className="app-logo">
          <BsGithub />
        </div>
        깃주팔자
      </h1>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header`
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 5px rgba(77, 74, 212, 0.1);

  .header-title {
    .logo {
      height: 100%;
      margin-left: 10px;
    }
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    font-weight: 600;
    font-size: 32px;
    color: #000000;
  }
`;
