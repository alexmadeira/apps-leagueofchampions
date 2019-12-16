import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import { useChampion } from '~/services/hooks/Champion';
import { Container } from './styles';

export default function Lore() {
  const { championMore } = useChampion();

  return (
    <Container>
      {championMore && ReactHtmlParser(championMore.biography.full)}
    </Container>
  );
}
