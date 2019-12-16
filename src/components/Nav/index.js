import React from 'react';
import { NavLink } from 'react-router-dom';
import history from '~/services/history';

import { useChampionInformation } from '~/services/hooks/Champion';
import { Container, NavItem } from './styles';

export default function Nav() {
  const { setLoading } = useChampionInformation();
  const { pathname } = history.location;

  return (
    <Container>
      <NavItem>
        <NavLink
          to="/skins"
          className={pathname === '/' && 'active'}
          onClick={() => {
            setLoading();
          }}
        />
      </NavItem>
      <NavItem>
        <NavLink
          to="/skills"
          onClick={() => {
            setLoading();
          }}
        />
      </NavItem>
      <NavItem>
        <NavLink
          to="/lore"
          onClick={() => {
            setLoading();
          }}
        />
      </NavItem>
    </Container>
  );
}
