import React from 'react';
import styled from 'styled-components';
import ResultInfoTag from './ResultInfoTag';

type Props = {
  nickname: string;
};
const UserResultCard = ({ nickname }: Props) => {
  return (
    <StyledWrapper>
      <img
        className="profile-img"
        src={`https://github.com/${nickname}.png`}
        width={150}
        height={150}
      />
      <span className="user-name">@{nickname}</span>
      <ResultInfoTag labelText="🌟 스타 수" amount={23} />
      <ResultInfoTag labelText="✍🏻 커밋 수" amount={99} />
      <ResultInfoTag labelText="👩‍👩‍👧‍👦 조직 수" amount={2422} />
    </StyledWrapper>
  );
};

export default UserResultCard;

const StyledWrapper = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .profile-img {
    border-radius: 50%;

    border: 4px solid transparent;
    border-radius: 50%;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, red 0%, #4d4ad5 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .user-name {
    color: #666666;
    font-size: 18px;
    margin: 20px 0 12px;
  }
`;
