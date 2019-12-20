import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import { useChampion } from '~/services/hooks/Champion';

import { Container, LoreContent } from './styles';

export default function Lore() {
  const { championMore } = useChampion();

  return (
    <Container>
      {championMore && (
        <LoreContent mobileNative>
          {ReactHtmlParser(championMore.biography.full)}
        </LoreContent>
      )}
    </Container>
  );
}
