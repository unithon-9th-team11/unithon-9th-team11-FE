import { getRandomInt, PersonalData } from 'pages/result/[id]';
import React from 'react';
import styled from 'styled-components';
import ResultInfoTag from './ResultInfoTag';

type Props = {
  data: PersonalData;
};

const UserResultCard = ({ data }: Props) => {
  return (
    <StyledWrapper>
      <a
        href={`https://github.com/${data?.githubId}`}
        target="_blank"
        className="profile-wrapper"
        rel="noreferrer"
      >
        <img
          // onError={"/image/octocat.png"}
          className="profile-img"
          src={`https://github.com/${data?.githubId}.png`}
          width={150}
          height={150}
        />
        <span className="user-name">@{data?.githubId ?? ''}</span>
      </a>
      <ResultInfoTag labelText="๐ ์คํ ์" amount={data?.totalStar ?? ''} />
      <ResultInfoTag labelText="โ๐ป ์ปค๋ฐ ์" amount={data?.totalCommit ?? ''} />
      <ResultInfoTag
        labelText="๐ฉโ๐ฉโ๐งโ๐ฆ ์กฐ์ง ์"
        amount={data?.totalOrganization ?? ''}
      />
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

  .profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .profile-img {
    border-radius: 50%;
    border: 4px solid transparent;

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
