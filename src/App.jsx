import React, { useLayoutEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Archiving from './components/Archiving';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

const Content = styled.div`
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 55px;
    width: 100dvw;
    height: calc(100dvh - 55px);
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      background: #000;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 123, 0);
    }
  }
`;

const OnTop = styled(FontAwesomeIcon)`
  position: fixed;
  right: 25px;
  bottom: 25px;
  font-size: 2.5rem;
  color: rgba(255, 123, 0);

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }
`;

const App = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [top, setTop] = useState(0);
  const scrollRef = useRef(null);

  const onClickToScrollTarget = (type) => {
    let navbarHeight = 55;
    let config = {
      behavior: 'smooth',
    };
    switch (type) {
      case 'top':
        config.top = 0;
        break;
      default:
        const target = document.getElementById(type);
        const y = target.getBoundingClientRect().y;
        if (viewport.width > 800) {
          const top = window.scrollY + y - navbarHeight;
          config.top = top;
        } else {
          if (!scrollRef.current) return;
          const top = scrollRef.current.scrollTop + y - navbarHeight;
          config.top = top;
        }
        break;
    }
    if (viewport.width > 800) {
      window.scrollTo(config);
      return;
    }
    scrollRef.current.scrollTo(config);
  };

  useLayoutEffect(() => {
    setViewport({
      width: window.visualViewport.width,
      height: window.visualViewport.height,
    });
    const resizeListener = () => {
      setViewport({
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      });
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  useLayoutEffect(() => {
    const scrollListener = () => {
      if (viewport.width > 800) {
        setTop(window.scrollY);
      } else {
        if (!scrollRef.current) return;
        setTop(scrollRef.current.scrollTop);
      }
    };
    if (viewport.width > 800) {
      console.log('up');
      window.addEventListener('scroll', scrollListener);
    } else {
      if (scrollRef.current) {
        scrollRef.current.addEventListener('scroll', scrollListener);
      }
    }
    return () => {
      if (viewport.width > 800) {
        window.removeEventListener('scroll', scrollListener);
      } else {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener('scroll', scrollListener);
        }
      }
    };
  }, [viewport]);

  return (
    <>
      <Navbar onScroll={onClickToScrollTarget} />
      <Content ref={scrollRef}>
        <Header onScroll={onClickToScrollTarget} />
        <AboutMe />
        <Skills />
        <Archiving />
        <Projects />
        <Contact />
      </Content>
      {top > 100 && (
        <OnTop
          icon={faSquareCaretUp}
          onClick={() => {
            onClickToScrollTarget('top');
          }}
        />
      )}
    </>
  );
};

export default App;
