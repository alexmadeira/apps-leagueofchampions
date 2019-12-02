import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '~/styles/global';
import Routes from '~/routes';

// https://developer.riotgames.com/docs/lol#data-dragon_other
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
