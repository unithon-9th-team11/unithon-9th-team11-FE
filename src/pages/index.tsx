import { Button, Input } from 'antd';
import { NextPage } from 'next';
import { FaYinYang } from 'react-icons/fa';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { useState, useEffect } from 'react';
import { useHover } from '@RootHooks/useHover';
import { useMutation } from '@tanstack/react-query';
import { postChemy } from './root.api/api';
import { useRouter } from 'next/router';

const FadeIn = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    from: { opacity: 0, y: 50 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

const FadeInRight = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

const FadeInLeft = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
    from: { opacity: 0, x: -50 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

const RotateSpring = ({ isVisible, children }) => {
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isVisible ? 'rotate(360deg)' : 'rotate(0deg)',
    from: { transform: 'rotate(90deg)' },
    config: {
      tension: 300,
      friction: 10,
    },
  });

  return (
    <animated.div style={style} className="fadeup-style">
      {children}
    </animated.div>
  );
};

/// COMPONENT

const PageMain: NextPage = () => {
  const [initialValue, setInitialValue] = useState({
    myname: '',
    yourname: '',
  });
  const router = useRouter();

  const mutation = useMutation(postChemy, {
    onSuccess(data) {
      // {createdChemyIdx: 6}
      router.push(`/loading?id=${data.createdChemyIdx}`);
    },
    onError(error) {
      console.log(error);
    },
  });

  const [isHoverOk, setIsHoverOk] = useState(false);

  const handleSubmit = () => {
    mutation.mutate({
      firstGithubId: initialValue.myname,
      secondGithubId: initialValue.yourname,
    });

    // router.push(`/result/${initialValue.myname}&${initialValue.yourname}`);
    // console.log(initialValue);
  };

  const { value: isHover, ref: btnRef } = useHover();

  useEffect(() => {
    if (isHover) setIsHoverOk(true);
    if (!initialValue?.myname || !initialValue?.yourname) setIsHoverOk(false);
  }, [isHover, initialValue]);

  return (
    <StyledWrapper>
      <FadeIn isVisible={true}>
        <h1 className="main-title">
          ??????
          <div className="logo">
            <FaYinYang />
          </div>
          ??????
        </h1>
      </FadeIn>

      <FadeInRight isVisible={true}>
        <div className="sub-title">
          ????????? <span className="sub-title-italic">github</span> ????????? ?????????
          ??????????????????!
        </div>
      </FadeInRight>

      <form className="group-wrapper" onSubmit={(e) => e.preventDefault()}>
        <FadeInLeft isVisible={true}>
          <div className="input-wrapper">
            <label className="label">??????</label>
            <Input
              placeholder="????????? github ???????????? ??????????????????"
              className="input"
              onChange={(e) => {
                setInitialValue({ ...initialValue, myname: e.target.value });
              }}
            />
          </div>

          <div className="input-wrapper">
            <label className="label">??????</label>
            <Input
              placeholder="???????????? github ???????????? ??????????????????"
              className="input"
              onChange={(e) => {
                setInitialValue({ ...initialValue, yourname: e.target.value });
              }}
            />
          </div>
        </FadeInLeft>

        <RotateSpring isVisible={isHoverOk}>
          <Button
            className="btn-result"
            onClick={handleSubmit}
            disabled={
              !initialValue?.myname ||
              !initialValue?.yourname ||
              mutation.isLoading
            }
            loading={mutation.isLoading}
            htmlType="submit"
            ref={btnRef}
          >
            {!!initialValue?.myname && !!initialValue?.yourname
              ? '????????????'
              : '??? ?????? ?????? ???????????? ??????????????????'}
          </Button>
        </RotateSpring>
      </form>
    </StyledWrapper>
  );
};

export default PageMain;

const StyledWrapper = styled.div`
  background-image: url('/image/mask_group.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-title {
    font-size: 80px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      margin: 0 20px;
    }
  }

  .sub-title {
    font-size: 30px;
    color: #818181;
    margin-top: 25px;
    font-weight: 600;

    .sub-title-italic {
      font-style: italic;
    }
  }

  .group-wrapper {
    margin: 90px 0 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .input-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;

      .label {
        font-size: 28px;
        font-weight: 700;
        margin-right: 14px;
        color: white;
      }

      .input {
        width: 500px;
        height: 60px;
        border-radius: 100px;
        padding: 0 40px;
        font-size: 20px;
        text-align: center;
        box-shadow: 8px 8px 20px darkgrey;
        border: 0;

        &::placeholder {
          text-align: center;
          color: #9a9a9a;
        }
      }
    }

    .fadeup-style {
      width: 100%;
    }

    .btn-result {
      margin-top: 20px;
      font-size: 24px;
      display: flex;
      font-weight: 700;
      justify-items: center;
      justify-content: center;
      align-items: center;
      background-color: black;
      color: white;
      padding: 30px;
      border-radius: 100px;
      width: 100%;
      border: 0;

      &:disabled {
        background-color: #9a9a9a;
      }
    }
  }
`;
