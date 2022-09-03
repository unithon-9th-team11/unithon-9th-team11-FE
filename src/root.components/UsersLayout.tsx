import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const UsersLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <StyledWrapper>
      <div className="content-style">{children}</div>
    </StyledWrapper>
  );
};

export default UsersLayout;

const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  .input-style {
    margin: 10px 0;
    height: 60px;
    border-radius: 14px;
  }

  .btn-submit {
    width: 100%;
    background-color: #f21361;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    height: 60px;
    border-radius: 14px;
    margin-top: 15px;
  }

  .content-style {
    max-width: 450px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .validation-msg {
    font-size: 12px;
    color: red;
    margin-bottom: 8px;
  }

  .link-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }

  .link {
    font-size: 14px;
    color: #f21361;
    text-decoration: underline;
  }
`;
