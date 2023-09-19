import styled from 'styled-components';
import { FlexGrowBox, Inner } from './Styled';
import { useEffect, useState } from 'react';

const StyledNavbar = styled.section`
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100dvw;
  height: 55px;
  background: ${(props) => (props.active ? '#fff' : 'transparent')};
  box-shadow: ${(props) => (props.active ? '0 3px 6px #000' : 'unset')};
  transition: 0.3s all ease-in;
`;

const MainLogo = styled.h1`
  color: ${(props) => (props.active ? '#000' : '#fff')};
  text-shadow: 0 0 10px #eee;

  &:hover {
    text-shadow: 0 0 10px #000;
  }

  &:active {
    filter: blur(1px);
  }
`;

const NavbarMenus = styled.div`
  margin: 0 15px;
  span {
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${(props) => (props.active ? 'rgb(230, 72, 10)' : '#aaa')};

    &:hover {
      color: #fff;
      text-shadow: 0 0 10px #eee;
    }

    &:active {
      filter: blur(1px);
    }
  }
`;

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <>
      <StyledNavbar active={active}>
        <Inner
          display="flex"
          flex-flow="row nowrap"
          justifyContent="center"
          alignItems="center"
        >
          <MainLogo active={active}>Seodev's Portfolio</MainLogo>
          <FlexGrowBox />
          <NavbarMenus active={active}>
            <span>About me</span>
            <span>Skills</span>
            <span>Archiving</span>
            <span>Projects</span>
            <span>Career</span>
            <span>Contact</span>
          </NavbarMenus>
        </Inner>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
