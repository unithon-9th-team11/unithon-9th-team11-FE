import React, { useEffect, useState } from 'react';
import { UserResultCard } from '@RootComponents/UserResultCard';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { UserResultText } from '@RootComponents/UserResultText';
import { ImSpinner2 } from 'react-icons/im';
import dynamic from 'next/dynamic';
import AuthAPI from 'pages/root.api/api';
import { Skeleton, Spin } from 'antd';
import { FaSpinner } from 'react-icons/fa';

export type PersonalData = {
  githubId: string;
  totalStar: number;
  totalCommit: number;
  totalOrganization: number;
};

export type Response = {
  chemyScore: number;
  firstPersonalData: PersonalData;
  secondPersonalData: PersonalData;
};

// firstPersonalData: {githubId: "ghoon99", totalStar: 2, totalCommit: 165, totalOrganization: 12}
// githubId: "ghoon99"
// totalCommit: 165
// totalOrganization: 12
// totalStar: 2
// secondPersonalData: {githubId: "210-reverof", totalStar: 1, totalCommit: 395, totalOrganization: 12}
// githubId: "210-reverof"
// totalCommit: 395
// totalOrganization: 12
// totalStar: 1

const UrlCopyButtonCSR = dynamic(import('@RootComponents/UrlCopyButton'), {
  ssr: false,
});

const getEmojiByScore = (score: number) => {
  if (score >= 800) return '🥳';
  if (score >= 600) return '🤗';
  if (score >= 400) return '🧐';
  return '😵‍💫';
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ResultPage = () => {
  const router = useRouter();
  const [data, setData] = useState<null | Response>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await AuthAPI.get(`/api/v1/chemy/${router.query.id}`);
      setData(res.data);
      setLoading(false);
    };

    getData();
  }, [router]);

  // const score = getRandomInt(0, 1000);
  const score = data?.chemyScore ?? 500;

  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spin size="large" />
      </div>
    );
  return (
    <StyledWrapper>
      <h3 className="result-message">
        두분의 궁합은{' '}
        <span>
          {score}점{getEmojiByScore(score)}
        </span>
      </h3>
      <p>상위 {Math.floor(score / 13)}%에 해당되는 순위네요!</p>

      <div className="result-cards-wrapper">
        <UserResultCard data={data?.firstPersonalData!} />
        <div className="report-card">
          <UserResultText score={score} data={data!} />
        </div>
        <UserResultCard data={data?.secondPersonalData!} />
      </div>

      <div>
        <UrlCopyButtonCSR />
      </div>
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

  .spinner {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
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
    margin: 18px 0;
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
