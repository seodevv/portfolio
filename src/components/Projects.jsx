import styled from 'styled-components';
import { Header, Inner } from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MineSweeper from './projects/MineSweeper';
import Tikitaka from './projects/Tikitaka';
import Portfolio from './projects/Portfolio';

const StyledProjects = styled.section`
  padding: 30px;
  background: #4b7e9c;
`;

export const Project = styled.div`
  margin-top: 30px;
  width: 70%;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
`;

export const ImgSlide = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: ${(props) => (props.height ? props.height : 'auto')};
  overflow: hidden;
  user-select: none;

  img {
    min-width: 100%;
    transition: 0.3s all ease-in;
    object-fit: contain;
  }
`;

export const Slider = styled(FontAwesomeIcon)`
  padding: 5px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.left ? '0' : 'unset')};
  right: ${(props) => (props.right ? '0' : 'unset')};
  font-size: 2rem;
  color: ${(props) => (props.color ? props.color : '#fff')};

  &:hover {
    color: #aaa;
  }

  &:active {
    filter: blur(1px);
  }
`;

export const Contoller = styled.div`
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

export const Info = styled.div`
  padding: 15px;

  h1 {
    font-size: 2.3rem;
    text-align: center;
  }

  p {
    padding-bottom: 10px;
    font-size: 1.5rem;
    border-bottom: 1px solid #aaa;
  }

  strong {
    color: rgb(255, 123, 0);
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

export const InfoIcons = styled.div`
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

export const Features = styled.div`
  margin: 10px;
  font-size: 1.5rem;
  text-align: center;

  > img {
    margin: 5px;
    display: block;
  }

  img + img {
    margin-left: 10px;
  }

  p {
    padding: 0;
    display: block;
    border: none;
  }
`;

const Projects = () => {
  return (
    <>
      <StyledProjects>
        <Header>Projects</Header>
        <Inner display="flex" flexFlow="column nowrap" alignItems="center">
          <MineSweeper />
          <Tikitaka />
          <Portfolio />
        </Inner>
      </StyledProjects>
    </>
  );
};

export default Projects;
