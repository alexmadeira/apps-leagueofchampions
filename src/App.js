import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ChampionsProvider } from '~/contexts/ChampionContext';
import '~/config/ReactotronConfig';

import GlobalStyle from '~/styles/global';

import Routes from '~/routes';

function App() {
  const [currentChampion, setCurrentChampion] = useState({
    find: 'Jinx',
    search: false,
    loading: true,
    activeSkill: -1,
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ChampionsProvider value={{ currentChampion, setCurrentChampion }}>
        <Routes />
      </ChampionsProvider>
    </BrowserRouter>
  );
}

export default App;
