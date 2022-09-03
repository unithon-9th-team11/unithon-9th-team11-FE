import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import {
  loginNavItems,
  logOutNavItems,
} from '@RootLayouts/libs/constant/navItem';
import Link from 'next/link';
import { FaYinYang } from 'react-icons/fa';

const Header = () => {
  const isLoggedIn = true;
  const navItems = isLoggedIn ? loginNavItems : logOutNavItems;

  return (
    <StyledWrapper>
      <h1 className="header-title">
        <Link href="/">
          <div className="app-logo">
            <FaYinYang />
            <span className="logo-name">깃주팔자</span>
          </div>
        </Link>
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
    cursor: pointer;
    .app-logo {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 14px;

      .logo-name {
        font-size: 20px;
        font-weight: 700;
        margin-left: 10px;
      }
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
