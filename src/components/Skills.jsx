import styled from 'styled-components';
import { Inner } from './Styled';
import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JS from '../img/js.png';
import TS from '../img/ts.png';
import SASS from '../img/sass.png';
import REACT from '../img/react.png';
import TOOLKIT from '../img/redux-toolkit.png';
import SAGA from '../img/redux-saga.png';
import RQUERY from '../img/react-query.png';
import JQUERY from '../img/jquery.png';
import BOOTSTRAP from '../img/bootstrap.png';
import MATERIAL from '../img/material.png';
import FONT from '../img/fontawesome.png';
import TAILWIND from '../img/tailwind.png';
import NODE from '../img/node.png';
import SOCKET from '../img/socket.png';
import MARIA from '../img/mariadb.png';
import ELASTIC from '../img/elasticsearch.png';
import MONGO from '../img/mongodb.png';
import FIREBASE from '../img/firebase.png';
import AWS from '../img/aws.png';
import DOCKER from '../img/docker.png';
import KUBERNETES from '../img/kubernetes.png';
import GIT from '../img/git.png';
import GITHUB from '../img/github.png';
import CERT_1 from '../img/cert_1.png';
import CERT_2 from '../img/cert_2.png';
import CERT_3 from '../img/cert_3.png';

const StyledSkills = styled.section`
  padding: 30px;
  width: 100%;
  background: rgba(230, 72, 10, 1);
`;

const SkillsHeader = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  text-decoration: underline;
`;

const Subject = styled.div`
  margin-top: 30px;
  padding: 15px;
  width: 90%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 5px 5px 15px #000;

  h3 {
    padding-bottom: 5px;
    font-size: 2.3rem;
    color: rgba(230, 72, 10, 1);
    border-bottom: 3px solid #aaa;
  }

  > div {
    margin-top: 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

const Skill = styled.div`
  margin: 10px;
  padding: 5px;
  position: relative;
  width: ${(props) => (props.width ? props.width : '120px')};
  max-width: calc(50% - 30px);
  height: ${(props) => (props.height ? props.height : '120px')};
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2);

  img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: 0.3s all ease-in;

    p {
      font-size: 1.5rem;
      color: #fff;
      visibility: hidden;
      opacity: 0;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.75);
    }

    &:hover p {
      visibility: visible;
      opacity: 1;
    }
  }

  &:hover .spin {
    animation-name: spin;
    animation-timing-function: ease;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Skills = () => {
  return (
    <>
      <StyledSkills>
        <Inner>
          <SkillsHeader>SKILLS</SkillsHeader>
          <Inner
            display="flex"
            flexFlow="column wrap"
            alignContent="space-around"
          >
            <Subject>
              <h3>FrontEnd</h3>
              <div>
                <Skill>
                  <img src={HTML} alt="html" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={CSS} alt="css" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={JS} alt="javascript" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={TS} alt="typescript" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={SASS} alt="sass" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={REACT} alt="react" className="spin" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={TOOLKIT} alt="toolkit" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={SAGA} alt="saga" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={RQUERY} alt="react-query" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={BOOTSTRAP} alt="bootstrap" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={MATERIAL} alt="material" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={TAILWIND} alt="material" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={FONT} alt="material" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={JQUERY} alt="jquery" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
              </div>
            </Subject>
            <Subject>
              <h3>BackEnd</h3>
              <div>
                <Skill width="auto">
                  <img src={NODE} alt="nodejs" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={SOCKET} alt="socket.io" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={MARIA} alt="mariadb" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={ELASTIC} alt="elastic" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={MONGO} alt="mongodb" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={FIREBASE} alt="firebase" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
              </div>
            </Subject>
            <Subject>
              <h3>Deployment</h3>
              <div>
                <Skill width="auto">
                  <img src={FIREBASE} alt="firebase" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={AWS} alt="aws" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={DOCKER} alt="docker" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={KUBERNETES} alt="kubernetes" />
                  <div className="cover">
                    <p>Tried</p>
                  </div>
                </Skill>
              </div>
            </Subject>
            <Subject>
              <h3>Version Control</h3>
              <div>
                <Skill width="auto">
                  <img src={GIT} alt="git" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
                <Skill width="auto">
                  <img src={GITHUB} alt="github" />
                  <div className="cover">
                    <p>Friendly</p>
                  </div>
                </Skill>
              </div>
            </Subject>
            <Subject>
              <h3>Certificate</h3>
              <div>
                <Skill>
                  <img src={CERT_1} alt="cert" />
                  <div className="cover">
                    <p>2018.05</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={CERT_3} alt="cert" />
                  <div className="cover">
                    <p>2022.07</p>
                  </div>
                </Skill>
                <Skill>
                  <img src={CERT_2} alt="cert" />
                  <div className="cover">
                    <p>2022.09</p>
                  </div>
                </Skill>
              </div>
            </Subject>
          </Inner>
        </Inner>
      </StyledSkills>
    </>
  );
};

export default Skills;
