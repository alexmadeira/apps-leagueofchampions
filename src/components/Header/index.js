import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { useSearch } from '~/services/hooks/Search';

import { Container, Logo, Menu, MenuItem } from './styles';

export default function Header() {
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
