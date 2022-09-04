import { Response } from 'pages/result/[id]';
import React from 'react';
import styled from 'styled-components';

type Props = {
  score: number;
  data: Response;
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

const renderAltMessage = (data: Response) => {
  const text = getText(
    data?.firstPersonalData.githubId,
    data?.secondPersonalData.githubId,
    data?.firstPersonalData.totalStar,
    data?.secondPersonalData.totalStar,
    data?.firstPersonalData.totalCommit,
    data?.secondPersonalData.totalCommit,
    data?.firstPersonalData.totalOrganization,
    data?.secondPersonalData.totalOrganization
  );

  return <>{text ?? '서로 보완해주는 친구'}</>;
};

const UserResultText = ({ score, data }: Props) => {
  return (
    <StyledWrapper>
      <span className="alt-message">{renderAltMessage(data)}</span>
      {renderMessage(score)}
    </StyledWrapper>
  );
};

export default UserResultText;

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #264083;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;

  .alt-message {
    margin-bottom: 32px;
    font-size: 32px;
    color: #4468c2;
  }
`;

function getText(id1, id2, star1, star2, commit1, commit2, org1, org2) {
  let nums = [0, 0, 0, 0];
  // let fisrt[] = firstGithubId.length
  // let second[] = secondGithubId.toCharArray();

  // if (firstGithubId.length() < 4 || secondGithubId.length() < 4) num1 = 250;

  // let firstNum1 = fisrt[0] + fisrt[1] + fisrt[2] + fisrt[3];
  // let secondNum1 = second[0] + second[1] + second[2] + second[3];
  let gap = Math.abs((id1?.length - id2?.lengh) * 10 * id1?.length);

  if (gap < 6) nums[0] = 200;
  else if (gap < 8) nums[0] = 150;
  else if (gap < 10) nums[0] = 100;
  else nums[0] = 50;

  let firstNum2 = star1 % 5;
  let secondNum2 = star2 % 5;
  let gap2 = Math.abs(firstNum2 - secondNum2);

  if (gap2 == 0) nums[1] = 250;
  else if (gap2 == 1) nums[1] = 200;
  else if (gap2 == 2) nums[1] = 150;
  else if (gap2 == 3) nums[1] = 100;
  else nums[1] = 50;

  let firstNum3 = commit1;
  let secondNum3 = commit2;
  let gap3 = Math.abs(firstNum3 - secondNum3);

  if (gap3 < 30) nums[2] = 250;
  else if (gap3 < 80) nums[2] = 200;
  else if (gap3 < 130) nums[2] = 150;
  else if (gap3 < 160) nums[2] = 100;
  else nums[2] = 50;

  let firstNum4 = org1;
  let secondNum4 = org2;
  let gap4 = Math.abs(firstNum4 - secondNum4);

  if (gap4 > 10) nums[3] = 250;
  else if (gap4 > 8) nums[3] = 200;
  else if (gap4 > 5) nums[3] = 150;
  else if (gap4 > 3) nums[3] = 100;
  else nums[3] = 50;

  let max = -1;
  let maxIdx = -1;
  for (let i = 0; i < 4; i++) {
    if (max < nums[i]) maxIdx = i;
  }

  let comments = [
    '이름부터 찰떡궁합',
    ' 시너지를 통해 서로 더 빛내주는 사이',
    '둘도 없는 러닝메이트',
    '서로 보완해주는 완벽 친구',
  ];

  return comments[maxIdx];
}
