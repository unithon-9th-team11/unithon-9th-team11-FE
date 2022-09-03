import React from 'react';
import { UserResultCard } from '@RootComponents/UserResultCard';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { UserResultText } from '@RootComponents/UserResultText';

const getEmojiByScore = (score: number) => {
  if (score >= 800) return '🥳';
  if (score >= 600) return '🤗';
  if (score >= 400) return '🧐';
  return '😵‍💫';
};
const ResultPage = () => {
  const router = useRouter();
  console.log(router.query);
  const score = 600;

  return (
    <StyledWrapper>
      <h3 className="result-message">
        두분의 궁합은{' '}
        <span>
          {score}점{getEmojiByScore(score)}
        </span>
      </h3>
      <p>상위 {99.9}%에 해당되는 순위네요!</p>

      <div className="result-cards-wrapper">
        <UserResultCard nickname="k" />
        <div className="report-card">
          <UserResultText score={score} />
        </div>
        <UserResultCard nickname="Jiwon-Jeong99" />
      </div>

      <div></div>
    </StyledWrapper>
  );
};

export default ResultPage;

const StyledWrapper = styled.div`
  height: 100vh;
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
    height: 300px;
    margin: 0 36px;
    width: 400px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, #bca3ea 0%, #8593d7 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`;
