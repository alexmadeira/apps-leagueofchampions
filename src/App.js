import React from 'react';
import { Router } from 'react-router-dom';

import '~/config/ReactotronConfig';

import GlobalStyle from '~/styles/global';

import Routes from '~/routes';
import history from '~/services/history';
import Footer from '~/components/Footer';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
