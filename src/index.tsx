import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);