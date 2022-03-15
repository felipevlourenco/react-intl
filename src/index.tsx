import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import '@formatjs/intl-getcanonicallocales/polyfill'
// import '@formatjs/intl-locale/polyfill'
// import '@formatjs/intl-pluralrules/polyfill'
// import '@formatjs/intl-pluralrules/locale-data/en' // locale-data for en
// import '@formatjs/intl-relativetimeformat/polyfill'
// import '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en
import 'fix-date'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);