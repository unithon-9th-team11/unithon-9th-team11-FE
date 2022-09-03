import React from 'react';
import { UserResultCard } from '@RootComponents/UserResultCard';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ResultPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <StyledWrapper>
      <div className="user-names">
        <span>{'asp32r98'}</span>
        <img src="/image/pngwing.png" width={90} height={90} />
        <span>{'asp32r2298'}</span>
      </div>
      <h3 className="result-message">
        두분의 궁합은 <span>{819}점</span> {'🥳'}
      </h3>
      <p>상위 {99.9}%에 해당되는 순위네요!</p>

      <div className="result-cards-wrapper">
        <UserResultCard nickname="Jiwon-Jeong99" />
        <div className="report-card"></div>
        <UserResultCard nickname="Jiwon-Jeong99" />
      </div>
    </StyledWrapper>
  );
};

export default ResultPage;

const StyledWrapper = styled.div`
  /* width: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .user-names {
    position: relative;
    display: flex;
    width: 600px;

    align-items: center;
    justify-content: center;
    font-size: 38px;
    font-weight: 700;
    color: #5d57a2;
    margin-bottom: 30px;

    & > img {
      margin: 0 auto;
      width: 90px;
      height: 90px;
      /* margin: 0 20px; */
    }

    & > span:first-child {
      text-align: right;
      position: absolute;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 240px;
      left: 0;
    }

    & > span:last-child {
      position: absolute;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 240px;
      right: 0;
    }
  }

  .result-message {
    font-size: 54px;
    font-weight: 700;
    margin-bottom: 16px;
    & > span {
      color: #5d57a2;
    }
  }

  & > p {
    font-size: 28px;
    font-weight: 700;
    color: #5d57a2;
  }

  .result-cards-wrapper {
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .report-card {
    height: 450px;
    margin: 0 36px;
    width: 400px;
    background-color: #faf6fd;
  }
`;
