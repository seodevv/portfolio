import styled from 'styled-components';
import MINE_1 from '../../img/minesweeper_1.png';
import MINE_2 from '../../img/minesweeper_2.png';
import MINE_3 from '../../img/minesweeper_3.png';
import {
  Contoller,
  Features,
  ImgSlide,
  Info,
  InfoIcons,
  Project,
  Slider,
} from '../Projects';
import {
  faChevronLeft,
  faChevronRight,
  faGear,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MineSweeper = () => {
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
              <span>23.05</span>
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
            <br />이 게임(지뢰찾기)을 만들면서 <strong>webpack</strong>을
            사용하여 <strong>모듈 번들링과 크로스 브라우징에 대해 이해</strong>
            할 수 있었고, babel, react-refresh, dev-tools 등 다양한 plugins 와
            loader 를 활용 할 수 있는 계기가 되었습니다.
            <br />
          </p>
          <Features>
            <p>Front-End</p>
            <div>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />
              <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
              <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />
              <img src="https://img.shields.io/badge/webpack-000000?style=flat-square&logo=webpack&logoColor=white" />
            </div>
          </Features>
        </Info>
      </Project>
    </>
  );
};

export default MineSweeper;
