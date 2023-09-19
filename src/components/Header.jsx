import styled from 'styled-components';
import background from '../img/header.jpg';
import { Inner } from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.section`
  padding-top: 55px;
  position: relative;
  width: 100%;
  height: 55dvh;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${background});
    background-size: cover;
    filter: brightness(50%);
  }

  h1 {
    display: block;
    font-size: 3.5rem;
  }

  p {
    font-size: 2rem;
    text-align: center;
  }

  .animation {
    padding-right: 10px;
    animation-name: ani;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes ani {
    0% {
      border-right: 3px solid transparent;
    }

    50% {
      border-right: 3px solid #fff;
    }

    100% {
      border-right: 3px solid transparent;
    }
  }
`;

const Divide = styled.div`
  margin: 2rem 0;
  width: 100px;
  height: 5px;
  background: #e6480a;
`;

const RelativeBox = styled.div`
  position: relative;
  width: 450px;
  height: 2rem;
  text-align: center;
  font-size: 2rem;
  white-space: nowrap;

  p:after {
    content: '저는 엔지니어 출신 Front-end 웹 개발자입니다.';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-right: 1px solid #fff;
    overflow: hidden;
    animation: typing 5s steps(31) infinite;
  }

  @keyframes typing {
    0% {
      width: 0;
    }

    40% {
      width: 100%;
    }

    60% {
      width: 100%;
    }

    100% {
      width: 0%;
    }
  }
`;

const Button = styled.button`
  margin-top: 25px;
  padding: 10px 15px;
  background: #e6480a;
  border: none;
  border-radius: 15px;
  font-family: inherit;
  font-size: 1.5rem;
  color: #fff;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    filter: blur(1px);
  }
`;

const DownIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Inner
          display="flex"
          flexFlow="column nowrap"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <h1>&#60; 서진원 &#62;</h1>
          <h1 className="animation">웹 개발자 포트폴리오</h1>
          <Divide />
          <p>안녕하세요.</p>
          <RelativeBox>
            <p></p>
          </RelativeBox>
          <Button>
            더 알아보기
            <DownIcon icon={faCaretDown} />
          </Button>
        </Inner>
      </StyledHeader>
    </>
  );
};

export default Header;
