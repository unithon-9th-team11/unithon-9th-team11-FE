import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const Loading = () => {
  const [imgWidth, setImgWidth] = useState(600);
  const router = useRouter();
  console.log('query', router.query.id);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`/result/${router.query.id}`);
    }, 14500);

    // const interval = setInterval
    return () => clearTimeout(timeout);
  }, [router]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!(imgWidth < 0)) {
        setImgWidth((imgWidth) => imgWidth - 1);
      } else {
        setImgWidth(600);
      }
    }, 25);
    return () => {
      clearInterval(interval);
    };
  }, [imgWidth]);

  return (
    <StyledWrapper imgWidth={imgWidth}>
      <img src="/image/octocat.png" alt="octocat" className="octocat" />
      <div className="loading-text">
        <span>궁합을 계산하는 중입니다.. 잠시만 기다려주세요.. ^^;</span>
        <span>고양이가 사라지면 이전페이지로 가게 됩니다.</span>
      </div>
    </StyledWrapper>
  );
};

export default Loading;

const StyledWrapper = styled.div<{ imgWidth: number }>`
  background-image: url('/image/loadingbg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .octocat {
    width: ${(props) => props.imgWidth}px;
    height: ${(props) => props.imgWidth}px;
    animation: rotation 5s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .loading-text {
    margin-top: 20px;
    color: white;
    font-size: 35px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
