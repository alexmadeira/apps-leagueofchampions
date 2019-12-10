import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

import { ddragonUrl, ddragonVersion } from '~/config/ddragonConfig';

import { useChampion, useChampionInformation } from '~/services/hooks/Champion';

import { Colors } from '~/styles/Metrics';
import { Container, Icon } from './styles';

function SkillIcon({ src, id }) {
  const { setSkill } = useChampionInformation();
  const { activeSkill } = useChampion();

  return (
    <Container
      onClick={() => {
        setSkill(id);
      }}
      className={activeSkill === id && 'active'}
    >
      <Icon
        src={`${ddragonUrl}/${ddragonVersion}/img/${src}`}
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
    </Container>
  );
}

SkillIcon.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default SkillIcon;
