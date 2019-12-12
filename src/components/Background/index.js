import React from 'react';
import { useChampion } from '~/services/hooks/Champion';

import { ddragonUrl } from '~/config/ddragonConfig';
import { Container, VideoBox, Video, PreLoad } from './styles';

export default function Background() {
  const { skins, id, activeSkin, championMore } = useChampion();

  return (
    <Container skin={skins && `${id}_${activeSkin}`}>
      {championMore && championMore.video && activeSkin === 0 && (
        <VideoBox>
          <Video
            autoPlay
            loop
            preload="auto"
            src={`${championMore.video.uri}`}
          />
        </VideoBox>
      )}
      <PreLoad>
        {skins &&
          skins.map(({ num, name }) => (
            <img
              src={`${ddragonUrl}/img/champion/splash/${id}_${num}.jpg`}
              key={num}
              alt={name}
            />
          ))}
      </PreLoad>
    </Container>
  );
}
