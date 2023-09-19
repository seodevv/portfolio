import styled from 'styled-components';
import { Header, Inner } from './Styled';
import MINE_1 from '../img/minesweeper_1.png';
import MINE_2 from '../img/minesweeper_2.png';
import MINE_3 from '../img/minesweeper_3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faGear,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledProjects = styled.section`
  padding: 30px;
  background: #4b7e9c;
`;

const Project = styled.div`
  margin-top: 30px;
  width: 50%;
  background: #fff;
  border-radius: 15px;
`;

const ImgSlide = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  overflow: hidden;
  user-select: none;

  img {
    min-width: 100%;
    transition: 0.3s all ease-in;
  }
`;

const Slider = styled(FontAwesomeIcon)`
  padding: 5px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.left ? '0' : 'unset')};
  right: ${(props) => (props.right ? '0' : 'unset')};
  font-size: 2rem;
  color: #fff;

  &:hover {
    color: #aaa;
  }

  &:active {
    filter: blur(1px);
  }
`;

const Contoller = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  text-align: center;

  svg {
    margin: 0 5px;
    font-size: 0.8rem;
    color: #aaa;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 5px #fff;
    }

    &:active {
      filter: blur(1px);
    }
  }

  .select {
    color: rgb(75, 126, 156);
  }
`;

const Info = styled.div`
  padding: 15px;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  strong {
    text-decoration: underline;
  }

  .demo {
    text-align: center;

    button {
      margin-top: 10px;
      padding: 5px 10px;
      background: rgba(0, 0, 0, 0.75);
      border: none;
      border-radius: 10px;
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;

const InfoIcons = styled.div`
  margin: 10px 0;
  padding-bottom: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #aaa;
  font-size: 1.5rem;

  > div {
    width: 120px;
    text-align: center;
  }

  > div + div {
    margin-left: 10px;
  }

  .big {
    margin: 0;
    width: 100%;

    span {
      margin: 0;
    }
  }

  svg {
    margin-right: 5px;
    padding: 5px;
    vertical-align: middle;
  }

  .btn-effect {
    cursor: pointer;
  }
`;

const Features = styled.div`
  margin: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  > img {
    display: block;
  }

  img + img {
    margin-left: 10px;
  }
`;

const Projects = () => {
  const [cur, setCur] = useState(0);

  const onClickSlider = (type) => {
    switch (type) {
      case 'left':
        setCur((prev) => prev - 1);
        break;
      case 'right':
        setCur((prev) => prev + 1);
        break;
      default:
    }
  };

  const onClickController = (i) => {
    setCur(i);
  };

  return (
    <>
      <StyledProjects>
        <Header>Projects</Header>
        <Inner display="flex" flexFlow="column nowrap" alignItems="center">
          <Project>
            <ImgSlide>
              <img
                src={MINE_1}
                alt="minesweeper"
                style={{ transform: `translateX(-${cur * 100}%)` }}
              />
              <img
                src={MINE_2}
                alt="minesweeper"
                style={{ transform: `translateX(-${cur * 100}%)` }}
              />
              <img
                src={MINE_3}
                alt="minesweeper"
                style={{ transform: `translateX(-${cur * 100}%)` }}
              />
              {cur !== 0 && (
                <Slider
                  icon={faChevronLeft}
                  left="true"
                  onClick={() => onClickSlider('left')}
                />
              )}
              {cur !== 2 && (
                <Slider
                  icon={faChevronRight}
                  right="true"
                  onClick={() => onClickSlider('right')}
                />
              )}
              <Contoller>
                <FontAwesomeIcon
                  className={cur === 0 ? 'select' : ''}
                  icon={faCircle}
                  onClick={() => onClickController(0)}
                />
                <FontAwesomeIcon
                  className={cur === 1 ? 'select' : ''}
                  icon={faCircle}
                  onClick={() => onClickController(1)}
                />
                <FontAwesomeIcon
                  className={cur === 2 ? 'select' : ''}
                  icon={faCircle}
                  onClick={() => onClickController(2)}
                />
              </Contoller>
            </ImgSlide>
            <Info>
              <h1>MineSweeper</h1>
              <InfoIcons>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  <span>1인 프로젝트</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>1주일</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faGithub} />
                  <span
                    className="btn-effect"
                    onClick={() => {
                      window.open('https://github.com/seodevv/MineSweeper');
                    }}
                  >
                    Source
                  </span>
                </div>
                <div className="big" style={{ marginTop: '10px' }}>
                  <FontAwesomeIcon icon={faGear} />
                  <span>주요 기능</span>
                </div>
                <div className="big">
                  <span>
                    [난이도 설정, 마우스 액션, 인접 빈칸 자동 열림, 시간 측정]
                  </span>
                </div>
                <div className="demo">
                  <button
                    className="btn-effect"
                    onClick={() => {
                      window.open('https://seodevv.github.io/MineSweeper/');
                    }}
                  >
                    구경 하러 가기
                  </button>
                </div>
              </InfoIcons>
              <p>
                React를 처음 접하면서 간단한 웹 게임을 만들어보았습니다.
                <br />이 게임(지뢰찾기)를 만들면서 <strong>webpack</strong>을
                사용하여 <strong>모듈 번들링에 대해 이해</strong>할 수 있었고,
                babel, react-refresh, dev-tools 등 다양한 plugins 와 loader 를
                활용 할 수 있는 계기가 되었습니다.
                <br />
              </p>
              <Features>
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />
              </Features>
            </Info>
          </Project>
        </Inner>
      </StyledProjects>
    </>
  );
};

export default Projects;
