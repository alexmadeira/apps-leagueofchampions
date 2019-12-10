import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

import { Colors } from '~/styles/Metrics';
import { Container, Imagem } from './styles';

function Splash({ id, num }) {
  return (
    <Container>
      <Imagem
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${num}.jpg`}
        loader={
          <ContentLoader
            height={100}
            width={55}
            speed={2}
            primaryColor={Colors.PreloadPrimaty}
            secondaryColor={Colors.PreloadSecondary}
          />
        }
      />
    </Container>
  );
}
Splash.propTypes = {
  id: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};
export default Splash;
