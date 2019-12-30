import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Lore from '~/pages/Lore';
import Skills from '~/pages/Skills';
import Skins from '~/pages/Skins';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Skills} />
      <Route path="/skins" component={Skins} />
      <Route path="/skills" component={Skills} />
      <Route path="/lore" component={Lore} />
    </Switch>
  );
}
