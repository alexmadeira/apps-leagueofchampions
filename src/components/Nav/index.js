import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Logo, Menu, MenuItem } from './styles';
import { useSearch } from '~/services/hooks/Champion';

export default function Nav() {
  const toogleSeach = useSearch();

  return (
    <Container>
      <Logo href="/#">League of Champions</Logo>
      <Menu>
        <MenuItem onClick={() => toogleSeach()}>
          <FaSearch />
        </MenuItem>
      </Menu>
    </Container>
  );
}
