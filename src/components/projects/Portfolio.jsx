import { Features, ImgSlide, Info, InfoIcons, Project } from '../Projects';
import PORTFOLIO from '../../img/portfolio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  return (
    <>
      <Project>
        <ImgSlide>
          <img src={PORTFOLIO} alt="portfolio" />
        </ImgSlide>
        <Info>
          <h1>Portfolio</h1>
          <InfoIcons>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <span>1인 프로젝트</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendar} />
              <span>23.09</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span
                className="btn-effect"
                onClick={() => {
                  window.open('https://github.com/seodevv/portfolio');
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
                [간단한 자기 소개, 인적 사항, 기술 스택, 프로젝트 경험]
              </span>
            </div>
          </InfoIcons>
          <p>
            <strong>포트폴리오 용도로 제작한 웹입니다.</strong>
            <br />
            순수 React 로 개발이 되었고, 현재 보고 계신 사이트입니다.
            <br />
            현재 Next.js 를 학습하고 있고, 학습이 완료되면 Next.js 로 변경하는
            작업을 거칠 예정입니다.
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
            </div>
          </Features>
        </Info>
      </Project>
    </>
  );
};

export default Portfolio;
