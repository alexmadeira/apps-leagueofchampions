import React from 'react';

import RoleImage from '~/assets/role';

import { Container, RoleItem } from './styles';

import { useChampion } from '~/services/hooks/Champion';

export default function Role() {
  const { tags } = useChampion();

  return (
    <Container>
      {tags &&
        tags.map(role => (
          <RoleItem key={role}>
            <img src={RoleImage[role.toLowerCase()]} alt={role} />
          </RoleItem>
        ))}
    </Container>
  );
}
