import React from 'react';
import { Input } from 'antd';
import StyledInputWrapper from './StyledInputWrapper';

type TProps = {
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>;
  isValidEmail: boolean;
};

const EmailInput = ({ onEmailChange, isValidEmail }: TProps) => {
  return (
    <StyledInputWrapper>
      <Input
        onChange={onEmailChange}
        status={!isValidEmail ? 'error' : undefined}
        className="login-input"
        placeholder="이메일"
        type="text"
      />
      {!isValidEmail && (
        <label className="error-message">
          유효하지 않은 이메일 형식입니다.
        </label>
      )}
    </StyledInputWrapper>
  );
};

export default EmailInput;
