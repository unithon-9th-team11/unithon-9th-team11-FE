import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import {
  loginNavItems,
  logOutNavItems,
} from '@RootLayouts/libs/constant/navItem';
import Link from 'next/link';

const Header = () => {
  // TODO 로그인 상태인지 확인해야 함
  const isLoggedIn = true;
  const navItems = isLoggedIn ? loginNavItems : logOutNavItems;

  return (
    <StyledWrapper>
      <h1 className="header-title">
        <div className="app-logo">
          <BsGithub />
        </div>
        깃주팔자
      </h1>
      <ul className="nav-wrapper">
        {navItems.map((item, index) => {
          return (
            <Link className="nav-link" key={`nav_${index}`} href={item.path}>
              {item.title}
            </Link>
          );
        })}
      </ul>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header`
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 5px rgba(198, 157, 239, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-title {
    margin-left: 60px;

    .app-logo {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 14px;
    }

    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    font-weight: 700;
    font-size: 32px;
    color: #000000;
  }

  .nav-wrapper {
    margin-right: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    .nav-link {
    }
    & > :not(:last-child) {
      margin-right: 40px;
    }
  }
`;
