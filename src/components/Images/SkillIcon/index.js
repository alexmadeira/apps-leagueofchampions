import React from 'react';
import ContentLoader from 'react-content-loader';

import PropTypes from 'prop-types';

import { ddragonUrl, ddragonVersion } from '~/config/ddragonConfig';
import { Colors } from '~/styles/Metrics';

import { Container } from './styles';

function SkillIcon({ src, name }) {
  return (
    <Container
      src={`${ddragonUrl}/${ddragonVersion}/img/${src}`}
      crossorigin="anonymous"
      alt={name}
      title={name}
      loader={
        <ContentLoader
          height={55}
          width={55}
          speed={2}
          primaryColor={Colors.PreloadPrimaty}
          secondaryColor={Colors.PreloadSecondary}
        />
      }
    />
  );
}

SkillIcon.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default SkillIcon;
