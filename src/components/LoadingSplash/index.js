import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { Container, Imagem } from './styles';

function LoadingSplash({ id, num }) {
  return (
    <Container>
      <Imagem
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${num}.jpg`}
        alt=""
        loader={
          <ContentLoader
            height={100}
            width={55}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#d9dcd7"
          />
        }
      />
    </Container>
  );
}
LoadingSplash.propTypes = {
  id: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};
export default LoadingSplash;
