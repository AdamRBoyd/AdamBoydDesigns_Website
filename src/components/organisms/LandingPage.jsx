import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15% 0;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

const MainImage = styled.img`
  width: 95%;
  align-self: center;
`;

const Organism = (props) => {
  return (
    <Wrapper {...props}>
      <MainImage
        alt='Landing Page Main Image'
        src='/images/LandingPageImage.png'
      />
    </Wrapper>
  );
};

Organism.propTypes = {
  reverse: PropTypes.bool,
};

export default Organism;
