import {
  Contoller,
  Features,
  ImgSlide,
  Info,
  InfoIcons,
  Project,
  Slider,
} from '../Projects';
import TIKITAKA_1 from '../../img/tikitaka_1.png';
import TIKITAKA_2 from '../../img/tikitaka_2.png';
import TIKITAKA_3 from '../../img/tikitaka_3.png';
import TIKITAKA_4 from '../../img/tikitaka_4.png';
import TIKITAKA_5 from '../../img/tikitaka_5.png';
import TIKITAKA_6 from '../../img/tikitaka_6.png';
import TIKITAKA_7 from '../../img/tikitaka_7.png';
import TIKITAKA_8 from '../../img/tikitaka_8.png';
import { useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
  faGear,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Tikitaka = () => {
  const [cur, setCur] = useState(0);

  const images = [
    TIKITAKA_1,
    TIKITAKA_2,
    TIKITAKA_3,
    TIKITAKA_4,
    TIKITAKA_5,
    TIKITAKA_6,
    TIKITAKA_7,
    TIKITAKA_8,
  ];

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
        <ImgSlide height="600px">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="minesweeper"
              style={{ transform: `translateX(-${cur * 100}%)` }}
            />
          ))}
          {cur !== 0 && (
            <Slider
              icon={faChevronLeft}
              left="true"
              color="#000"
              onClick={() => onClickSlider('left')}
            />
          )}
          {cur !== images.length - 1 && (
            <Slider
              icon={faChevronRight}
              right="true"
              color="#000"
              onClick={() => onClickSlider('right')}
            />
          )}
          <Contoller>
            {images.map((_, i) => (
              <FontAwesomeIcon
                key={i}
                className={cur === i ? 'select' : ''}
                icon={faCircle}
                onClick={() => onClickController(i)}
              />
            ))}
          </Contoller>
        </ImgSlide>
        <Info>
          <h1>Tikitaka</h1>
          <InfoIcons>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <span>1인 프로젝트</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendar} />
              <span>23.08</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span
                className="btn-effect"
                onClick={() => {
                  window.open('https://github.com/seodevv/tikitaka');
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
                [로그인 기능, OAuth, 회원 가입, 메일 인증, 소셜 기능, 인터랙티브
                기능, 소셜 검색 기능, 피드 기능, 실시간 채팅 기능, 알람 기능]
              </span>
              <p
                style={{
                  marginTop: '10px',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
              >
                guest 계정 : guset / Qwer1234!
              </p>
            </div>
            <div className="demo">
              <button
                className="btn-effect"
                onClick={() => {
                  window.open('https://seodevv.com/');
                }}
              >
                구경 하러 가기
              </button>
            </div>
          </InfoIcons>
          <p>
            <strong>
              사람들과 일상 생활을 공유하고 소통할 수 있는 어플리케이션입니다.
            </strong>{' '}
            사람들과 소통하고 공감하는 것을 좋아하는 사람들을 위해 간단한 소셜
            시스템을 만들었습니다.
            <br />
            <br />
            처음으로 <strong>풀스택</strong>으로 개발한 프로젝트입니다. 이
            과정에서 특정 요구 사항이 발생했을 때{' '}
            <strong>
              client 와 server side 에서 각각 어떻게 처리해야하는지
            </strong>
            &nbsp;고민해보고 이해할 수 있는 프로젝트였습니다.
            <br />
            <br />
            <strong>UI & UX</strong> 를 깊게 고민하여 스스로 디자인하였고{' '}
            <strong>웹 반응형으로 제작되어 데스크탑, 모바일</strong>에서 모두
            대응 가능합니다. 또한 keyframe 을 활용하여 여러{' '}
            <strong>애니메이션</strong>들을 구현하였습니다.
            <br />
            <br />
            그리고 <strong>실시간 채팅</strong> 기능을 만들면서{' '}
            <strong>socket</strong> 에 대한 개념을 더욱 확실히 숙지할 수
            있었습니다.
            <br />
            <br />그 외에도 복수의 페이지, 소셜 로그인, 웹 푸쉬, 서비스워커 등을
            활용해보면서 <strong>라우팅, OAuth, 알람</strong> 등에 대한 개념을
            이해할 수 있는 계기가 되었습니다.
          </p>
          <Features>
            <p>Front-End</p>
            <div>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />
              <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
              <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />
              <img src="https://img.shields.io/badge/webpack-000000?style=flat-square&logo=webpack&logoColor=white" />
              <img src="https://img.shields.io/badge/fontawesome-528dd7?style=flat-square&logo=fontawesome&logoColor=white" />
              <img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&logo=redux&logoColor=white" />
            </div>
            <p>Back-End</p>
            <div>
              <img src="https://img.shields.io/badge/nodedotjs-339933?style=flat-square&logo=node.js&logoColor=white" />
              <img src="https://img.shields.io/badge/express-000000?style=flat-square&logo=express&logoColor=white" />
              <img src="https://img.shields.io/badge/socketdotio-010101?style=flat-square&logo=socketdotio&logoColor=white" />
              <img src="https://img.shields.io/badge/mariadb-003545?style=flat-square&logo=mariadb&logoColor=white" />
              <img src="https://img.shields.io/badge/firebase-ffca28?style=flat-square&logo=firebase&logoColor=white" />
              <img src="https://img.shields.io/badge/ffmpeg-007808?style=flat-square&logo=ffmpeg&logoColor=white" />
            </div>
            <p>Deployment</p>
            <div>
              <img src="https://img.shields.io/badge/amazonaws-232f3e?style=flat-square&logo=amazonaws&logoColor=white" />
              <img src="https://img.shields.io/badge/git-f05032?style=flat-square&logo=git&logoColor=white" />
              <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white" />
            </div>
          </Features>
        </Info>
      </Project>
    </>
  );
};

export default Tikitaka;
