import React, { useState } from 'react';

export type UseInputHookResult = [
  string,
  React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  () => void
];

const useInput = (initialValue: string): UseInputHookResult => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleClearInput = () => {
    setInputValue('');
  };
  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  return [inputValue, handleInputValueChange, handleClearInput];
};

export default useInput;
