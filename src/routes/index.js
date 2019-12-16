import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Lore from '~/pages/Lore';
import Skins from '~/pages/Skins';
import Skills from '~/pages/Skills';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Skills} />
      <Route path="/skills" component={Skills} />
      <Route path="/skins" component={Skins} />
      <Route path="/lore" component={Lore} />
    </Switch>
  );
}
