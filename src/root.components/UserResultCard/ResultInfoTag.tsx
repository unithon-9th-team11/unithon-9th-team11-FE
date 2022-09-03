import React from 'react';
import styled from 'styled-components';

type Props = {
  labelText: string;
  amount: number;
};
const ResultInfoTag = ({ labelText, amount }: Props) => {
  return (
    <StyledWrapper>
      <span>{labelText}</span>
      <span>{amount}</span>
    </StyledWrapper>
  );
};

export default ResultInfoTag;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  font-size: 20px;
  padding: 24px;
  height: 50px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin-bottom: 20px;
  width: 100%;
`;
