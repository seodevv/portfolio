import styled from 'styled-components';
import { Header, Inner } from './Styled';

const StyledCareer = styled.section`
  padding: 30px;
  background: #dbdbdb;
`;

const Career = () => {
  return (
    <>
      <StyledCareer>
        <Header color="#000">CAREER</Header>
        <Inner></Inner>
      </StyledCareer>
    </>
  );
};

export default Career;
