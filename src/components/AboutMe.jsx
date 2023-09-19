import {
  faCalendar,
  faContactBook,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledAboutMe = styled.section`
  padding: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #000;
  color: #fff;

  > div:nth-child(1) {
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    .underline {
      text-decoration: underline;
    }
  }

  > div:nth-child(2) {
    margin-left: 50px;
    padding: 30px;

    h1 {
      font-size: 2.5rem;
    }

    div {
      margin-top: 15px;
    }

    p {
      font-size: 1.7rem;
    }

    .mt-10 {
      margin-top: 10px;
    }
  }
`;

const StyledInfo = styled.section`
  padding: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const InfoItem = styled.div`
  padding: 15px 0;
  width: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  width: 55px;
  color: #000;
`;

const Content = styled.div`
  margin-left: 30px;
  flex-grow: 1;

  p {
    font-weight: bold;
    font-size: 2rem;
  }

  span {
    font-size: 1.7rem;
    line-height: 2rem;
  }

  .small {
    font-size: 1.5rem;
  }
`;

const AboutMe = () => {
  return (
    <>
      <StyledAboutMe>
        <div>
          <h1>ABOUT</h1>
          <h1 className="underline btn-effect">ME</h1>
        </div>
        <div>
          <h1>도전하는 사람</h1>
          <div>
            <p>저는 도전하는 것을 두려워하지 않는 개발자입니다.</p>
            <p className="mt-10">개발자가 되기 전,</p>
            <p>
              다양한 필드를 경험해 보고 싶어 엔지니어를 약 4년 동안 수행했고
            </p>
            <p>
              이를 통해, 다양한 환경의 CS 지식과 커뮤니케이션 스킬을 얻었습니다.
            </p>
            <p className="mt-10">이제는 이 경험을 바탕으로,</p>
            <p>
              사용자들에겐 친화적이고 다양한 환경에 스킬들을 접목시킬 수 있는
            </p>
            <p>항상 도전하는 개발자가 되겠습니다.</p>
            <p className="mt-10">잘 부탁드립니다.</p>
          </div>
        </div>
      </StyledAboutMe>
      <StyledInfo>
        <InfoItem>
          <Icon icon={faUser} />
          <Content>
            <p>이름</p>
            <span>서진원</span>
          </Content>
        </InfoItem>
        <InfoItem>
          <Icon icon={faLocationDot} />
          <Content>
            <p>주소</p>
            <span>경기 화성시 기흥구</span>
          </Content>
        </InfoItem>
        <InfoItem>
          <Icon icon={faCalendar} />
          <Content>
            <p>생년월일</p>
            <span>92.08.28</span>
          </Content>
        </InfoItem>
        <InfoItem>
          <Icon icon={faPhone} />
          <Content>
            <p>연락처</p>
            <span>010-3275-1132</span>
          </Content>
        </InfoItem>
        <InfoItem>
          <Icon icon={faEnvelope} />
          <Content>
            <p>이메일</p>
            <span
              className="small btn-effect"
              onClick={() => {
                window.open('mailto:seodev17@gmail.com');
              }}
            >
              seodev17@gmail.com
            </span>
          </Content>
        </InfoItem>
        <InfoItem>
          <Icon icon={faUserGraduate} />
          <Content>
            <p>학력</p>
            <span className="small">충북대학교(컴퓨터교육학)</span>
          </Content>
        </InfoItem>
      </StyledInfo>
    </>
  );
};

export default AboutMe;
