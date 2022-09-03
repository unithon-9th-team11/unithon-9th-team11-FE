import { Button, message } from 'antd';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

const UrlCopyButton = () => {
  const currentPage = window.location.href;

  return (
    <CopyToClipboard
      text={currentPage}
      onCopy={() => message.success('클립보드에 복사되었습니다!', 0.5)}
    >
      <StyledButton>URL로 공유하기</StyledButton>
    </CopyToClipboard>
  );
};

export default UrlCopyButton;

const StyledButton = styled(Button)`
  background-color: #f21361;
  color: #ffffff;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  border-radius: 20px;

  filter: drop-shadow(3px 4px 10px rgba(242, 19, 97, 0.25));
  &:hover,
  &:active,
  &:focus {
    background-color: #f21361;
    color: white;
  }
`;
