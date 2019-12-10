import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Champion from '~/pages/Champion';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Champion} />
      <Route path="/:slug" component={Champion} />
    </Switch>
  );
}
