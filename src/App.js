import React from 'react';
import { Router } from 'react-router-dom';

import '~/config/ReactotronConfig';

import GlobalStyle from '~/styles/global';

import Pages from '~/pages';
import history from '~/services/history';
import Footer from '~/components/Statics/Footer';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Pages />
      <Footer />
    </Router>
  );
}

export default App;
