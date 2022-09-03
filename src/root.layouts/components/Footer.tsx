import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledWrapper className="css-flex-center">
      <p className="footer-message css-flex-center">
        with wanted pre-onboarding challenge FE-1
        <br />
        @ghoon99
        <br />
        @2022 ToDo App.
      </p>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.footer`
  width: 100%;
  height: 6rem;
  border-top: 1px solid #f2f2f2;

  .footer-message {
    height: 100%;
    line-height: 1.2;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    color: #999999;
  }
`;
