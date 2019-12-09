import React from 'react';
import PropTypes from 'prop-types';

import { Container, Champion } from './styles';
import { useChampionInformation } from '~/services/hooks/Champion';

function ChampionList({ list }) {
  const { setFind } = useChampionInformation();

  const listArray = Object.entries(list);

  return (
    <Container>
      {listArray &&
        listArray.map(item => {
          const { id, name } = item[1];
          return (
            <Champion
              key={name}
              onClick={() => {
                setFind(id);
              }}
            >
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
                alt={name}
              />
            </Champion>
          );
        })}
    </Container>
  );
}

ChampionList.propTypes = {
  list: PropTypes.shape().isRequired,
};

export default ChampionList;
