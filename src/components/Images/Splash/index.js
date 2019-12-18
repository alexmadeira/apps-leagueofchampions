import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

import { Colors } from '~/styles/Metrics';
import { ddragonUrl } from '~/config/ddragonConfig';
import { Container, Imagem, Name } from './styles';

function Splash({ id, num, name, retire }) {
  return (
    <Container className={retire && 'retire'}>
      <Imagem
        src={`${ddragonUrl}/img/champion/loading/${id}_${num}.jpg`}
        crossorigin="anonymous"
        loader={
          <ContentLoader
            height={100}
            width={55}
            speed={2}
            primaryColor={Colors.PreloadPrimaty}
            secondaryColor={Colors.PreloadSecondary}
          >
            <rect x="0" y="0" rx="0" ry="0" width="55" height="100" />
          </ContentLoader>
        }
      />
      {name && <Name>{name}</Name>}
    </Container>
  );
}
Splash.defaultProps = {
  name: false,
  retire: false,
};

Splash.propTypes = {
  id: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  retire: PropTypes.bool,
};
export default Splash;
