import React from 'react';
import styled from 'styled-components';

type Props = {
  score: number;
};

export const resultMessages = [
  {
    text: (
      <>
        두 분의 궁합은
        <br /> 찰떡 궁합처럼 쫀쫀하네요!
      </>
    ),
  },
  {
    text: (
      <>
        두 분의 궁합은 <br /> 마치 짜장면과 단무지 같아요!
      </>
    ),
  },
  {
    text: (
      <>
        두 분의 궁합은 간신히 궁합이라고
        <br /> 부를만하네요^^
      </>
    ),
  },
  {
    text: (
      <>
        두 분의 궁합은 <br /> 지나가다가 마주쳐도 몰라볼 사이네요^^
      </>
    ),
  },
] as const;

const renderMessage = (score: number) => {
  if (score >= 800) return resultMessages[0].text;
  if (score >= 600) return resultMessages[1].text;
  if (score >= 400) return resultMessages[2].text;
  return resultMessages[3].text;
};

const UserResultText = ({ score }: Props) => {
  return <StyledWrapper>{renderMessage(score)}</StyledWrapper>;
};

export default UserResultText;

const StyledWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #264083;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;
`;
