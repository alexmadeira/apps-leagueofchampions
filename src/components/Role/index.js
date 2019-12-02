import React from 'react';

import fighter from '~/assets/role/fighter.png';
import marksman from '~/assets/role/marksman.png';

import { Container, RoleItem } from './styles';

export default function Role() {
  return (
    <Container>
      <RoleItem>
        <img src={fighter} alt="as" />
      </RoleItem>
      <RoleItem>
        <img src={marksman} alt="as" />
      </RoleItem>
    </Container>
  );
}
