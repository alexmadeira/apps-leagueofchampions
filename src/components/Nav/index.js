import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Logo, Menu, MenuItem } from './styles';
import { useSearch } from '~/services/hooks/Search';

export default function Nav() {
  const { toogleSearch } = useSearch();

  return (
    <Container>
      <Logo href="/#">League of Champions</Logo>
      <Menu>
        <MenuItem onClick={() => toogleSearch()}>
          <FaSearch />
        </MenuItem>
      </Menu>
    </Container>
  );
}
