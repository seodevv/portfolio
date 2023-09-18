import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const start = () => {
  ReactDOM.render(
    <>
      <App />
    </>,
    document.querySelector('#root')
  );
};

start();
