import React from 'react';

import { Container, Logo, Menu, MenuItem } from './styles';

export default function Nav() {
  return (
    <Container>
      <Logo href="/#">League of Champions</Logo>
      <Menu>
        <MenuItem>
          <a href="/#" className="active">
            Champions
          </a>
        </MenuItem>

        <MenuItem>busca</MenuItem>
      </Menu>
    </Container>
  );
}
