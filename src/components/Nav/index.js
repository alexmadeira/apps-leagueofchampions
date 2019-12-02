import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Logo, Menu, MenuItem } from './styles';

export default function Nav() {
  return (
    <Container>
      <Logo href="/#">League of Champions</Logo>
      <Menu>
        <MenuItem>
          <FaSearch />
        </MenuItem>
      </Menu>
    </Container>
  );
}
