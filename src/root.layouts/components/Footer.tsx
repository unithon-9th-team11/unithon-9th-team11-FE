import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledWrapper className="css-flex-center">
      <p className="footer-message css-flex-center">
        @2022 깃주팔자
        <br />
        @Unithon 9th team 11
      </p>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.footer`
  width: 100%;
  height: 30px;
  padding: 30px 0;
  border-top: 1px solid #f2f2f2;

  .footer-message {
    height: 100%;
    line-height: 1.2;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #999999;
  }
`;
