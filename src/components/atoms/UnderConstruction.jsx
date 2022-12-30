import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTempImage = styled.img`
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  object-fit: cover;
  height: 300px;
  width: 200 px;
`;

const UnderConstruction = () => {
  return (
    <MainWrapper>
      <StyledTempImage
        src='/images/UnderConstructionSign.png'
        alt='Under Construction'
      />
    </MainWrapper>
  );
};

export default UnderConstruction;
