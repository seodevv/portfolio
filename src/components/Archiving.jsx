import styled from 'styled-components';
import { Inner } from './Styled';
import GITHUB from '../img/github.png';

const StyledArchiving = styled.section`
  padding: 30px;
  width: 100%;
  background: #272727;
`;

const ArchivingHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
  color: #fff;
`;

const ArchivingItem = styled.div`
  margin-top: 30px;
  padding: 15px 20px;
  width: 50%;
  background: #fff;
  border-radius: 15px;

  img {
    max-width: 50%;
  }
`;

const ArchivingInfo = styled.div`
  margin-top: 10px;
  font-size: 1.7rem;
  line-height: 2rem;

  a {
    color: #1e62f7;
  }
`;

const Archiving = () => {
  return (
    <>
      <StyledArchiving>
        <ArchivingHeader>Archiving</ArchivingHeader>
        <Inner display="flex" flexFlow="column wrap" alignItems="center">
          <ArchivingItem>
            <div>
              <img src={GITHUB} alt="github" />
            </div>
            <ArchivingInfo>
              <a href="https://github.com/seodevv" target="_blank">
                https://github.com/seodevv
              </a>
              <p>
                <strong>소스 코드 저장소</strong>입니다.
              </p>
              <ul>
                <li>프로젝트, 어플의 소스 코드가 있습니다.</li>
                <li>일부 프로젝트들을 배포하고 호스팅하기도 합니다.</li>
                <li>
                  한편으론 공부 공간으로, 활용했던 기술들을 내 것으로 만들기
                  위해 정리해놓았습니다.
                </li>
              </ul>
            </ArchivingInfo>
          </ArchivingItem>
        </Inner>
      </StyledArchiving>
    </>
  );
};

export default Archiving;
