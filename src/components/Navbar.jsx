import styled from 'styled-components';
import { FlexGrowBox, Inner } from './Styled';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  @media screen and (max-width: 800px) {
    background: #fff;
    transition: none;
  }
`;

const MainLogo = styled.h1`
  font-size: 2rem;
  color: ${(props) => (props.active ? '#000' : '#fff')};
  text-shadow: 0 0 10px #eee;

  &:hover {
    text-shadow: 0 0 10px #000;
  }

  &:active {
    filter: blur(1px);
  }

  @media screen and (max-width: 800px) {
    color: #000;

    &:hover {
      text-shadow: unset;
    }
  }
`;

const NavbarMenus = styled.div`
  margin: 0 15px;
  span {
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${(props) => (props.active ? 'rgb(230, 72, 10)' : '#aaa')};
    cursor: pointer;

    &:hover {
      color: #fff;
      text-shadow: 0 0 10px #eee;
    }

    &:active {
      filter: blur(1px);
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const MobileMenu = styled(FontAwesomeIcon)`
  display: none;

  @media screen and (max-width: 800px) {
    margin-right: 10px;
    display: block;
    font-size: 2rem;

    &:active {
      color: rgba(255, 123, 0);
    }
  }
`;

const MobileDropdown = styled.section`
  padding: 0;
  position: fixed;
  top: 55px;
  left: 0;
  z-index: 998;
  width: 100dvw;
  max-height: 0;
  background: #fff;
  overflow: hidden;
  transition: 0.3s all ease;

  li {
    font-size: 1.7rem;

    &:hover {
      color: rgba(255, 123, 0);
    }

    &:active {
      color: rgba(255, 123, 0);
      filter: blur(1px);
    }
  }
`;

const Navbar = ({ onScroll }) => {
  const [active, setActive] = useState(false);
  const menus = ['about me', 'skills', 'archiving', 'projects', 'contact'];

  const [dropdown, setDropdown] = useState(false);

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
          <MainLogo
            active={active}
            onClick={() => {
              onScroll('top');
            }}
          >
            Seodev's Portfolio
          </MainLogo>
          <FlexGrowBox />
          <MobileMenu
            icon={faBars}
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          />
          <NavbarMenus active={active}>
            {menus.map((menu) => (
              <span
                key={menu}
                onClick={() => {
                  const id = menu.replace(/\s/, '');
                  onScroll(id);
                }}
              >
                {menu.replace(/^[a-z]/, (c) => c.toUpperCase())}
              </span>
            ))}
          </NavbarMenus>
        </Inner>
      </StyledNavbar>
      <MobileDropdown className={dropdown && 'dropdown-active'}>
        {menus.map((menu) => (
          <li
            key={menu}
            onClick={() => {
              const id = menu.replace(/\s/, '');
              onScroll(id);
              setDropdown(false);
            }}
          >
            {menu.replace(/^[a-z]/, (c) => c.toUpperCase())}
          </li>
        ))}
      </MobileDropdown>
    </>
  );
};

export default Navbar;
