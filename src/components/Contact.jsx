import styled from 'styled-components';
import { Header, Inner } from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const StyledContact = styled.section`
  padding: 30px;
  background: #dadada;
`;

const ResponsiveInner = styled(Inner)`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContactEmail = styled.div`
  margin-top: 15px;
  font-size: 2rem;
  color: #001aff;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    filter: blur(1px);
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  margin-left: ${(props) => (props.marginleft ? props.marginleft : 'unset')};
  display: block;
  background: #fff;
  border: 3px solid #fff;
  font-size: 3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background: #000;
    color: #fff;
    border: 3px solid #000;
  }

  &:active {
    filter: blur(1px);
  }
`;

const CopyRight = styled.p`
  margin-top: 15px;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: center;
`;

const Contact = () => {
  const onClickWindowOpen = (url) => {
    window.open(url);
  };

  return (
    <>
      <StyledContact id="contact">
        <Header color="#000">Contact</Header>
        <ContactEmail
          onClick={() => {
            onClickWindowOpen('mailto:seodev17@gmail.com');
          }}
        >
          seodev17@gmail.com
        </ContactEmail>
        <ResponsiveInner>
          <ContactIcon
            icon={faGithub}
            onClick={() => onClickWindowOpen('https://github.com/seodevv')}
          />
          <ContactIcon
            marginleft="15px"
            icon={faInstagram}
            onClick={() =>
              onClickWindowOpen('https://www.instagram.com/seo.devv/')
            }
          />
          <ContactIcon
            marginleft="15px"
            icon={faXTwitter}
            onClick={() => {
              onClickWindowOpen('https://twitter.com/seo_devv');
            }}
          />
        </ResponsiveInner>
        <CopyRight>ⓒopyright. 2023. Jinwon Seo. seodev</CopyRight>
      </StyledContact>
    </>
  );
};

export default Contact;
