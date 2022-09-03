import { Button, Input } from 'antd';
import { NextPage } from 'next';
import { FaYinYang } from 'react-icons/fa';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';

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

const FadeInUp = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -50,
    from: { opacity: 0, y: -50 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

const PageMain: NextPage = () => {
  return (
    <StyledWrapper>
      <FadeIn isVisible={true}>
        <h1 className="main-title">
          깃주
          <div className="logo">
            <FaYinYang />
          </div>
          팔자
        </h1>
      </FadeIn>

      <FadeInRight isVisible={true}>
        <div className="sub-title">
          서로의 <span className="sub-title-italic">github</span> 궁합이 좋은지
          확인해보세요!
        </div>
      </FadeInRight>

      <div className="group-wrapper">
        <FadeInLeft isVisible={true}>
          <div className="input-wrapper">
            <label className="label">나와</label>
            <Input
              placeholder="https://github.com/italsekf"
              className="input"
            />
          </div>

          <div className="input-wrapper">
            <label className="label">너의</label>
            <Input
              placeholder="https://github.com/italsekf"
              className="input"
            />
          </div>
        </FadeInLeft>

        <FadeInUp isVisible={true}>
          <Button className="btn-result">궁합결과</Button>
        </FadeInUp>
      </div>
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

        &::placeholder {
          text-align: center;
          color: #9a9a9a;
        }
      }
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
    }
  }
`;
