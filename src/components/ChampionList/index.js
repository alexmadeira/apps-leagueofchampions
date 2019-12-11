import React from 'react';
import PropTypes from 'prop-types';

import { useChampionInformation } from '~/services/hooks/Champion';

import Splash from '~/components/Images/Splash';

import { Container, ChampionContentList, Champion } from './styles';

function ChampionList({ list, height }) {
  const { setFind } = useChampionInformation();

  const listArray = Object.entries(list);

  return (
    <Container height={height}>
      {listArray && (
        <ChampionContentList>
          {listArray.map(item => {
            const { id, name } = item[1];
            return (
              <Champion
                key={id}
                onClick={() => {
                  setFind(id);
                }}
              >
                <Splash id={id} num="0" name={name} />
              </Champion>
            );
          })}
        </ChampionContentList>
      )}
    </Container>
  );
}

ChampionList.defaultProps = {
  height: '',
};

ChampionList.propTypes = {
  list: PropTypes.shape().isRequired,
  height: PropTypes.string,
};

export default ChampionList;
