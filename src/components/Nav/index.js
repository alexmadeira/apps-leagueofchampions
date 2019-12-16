import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, NavItem } from './styles';

export default function Nav() {
  return (
    <Container>
      <NavItem>
        <NavLink to="/skins" />
      </NavItem>
      <NavItem>
        <NavLink to="/skills" />
      </NavItem>
      <NavItem>
        <NavLink to="/lore" />
      </NavItem>
    </Container>
  );
}
