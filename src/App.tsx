import React from 'react';
import './App.css';
import { I18Provider, LOCALES } from './i18n';
// import translate from './i18n/translate'
// import { FormattedRelativeTime } from 'react-intl'
import { Data } from './Data';

function App() {


  return (
    <I18Provider
      locale={LOCALES.ENGLISH}
    >
      <div className="App">
        <Data />
        {/* {translate('hello')}
        {translate('edit', { path: <strong>test</strong> })} */}
        {/* <FormattedRelativeTime value={0} numeric="auto" updateIntervalInSeconds={1} /> */}
      </div>

    </I18Provider>
  );
}

export default App;
