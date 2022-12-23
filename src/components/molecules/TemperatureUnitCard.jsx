import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { Input, Label } from '../../components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem;
`;

const StyledInput = styled(Input)`
  width: 15rem;
  background-color: transparent;
  color: ${palette('grayscale', 0)};
  border-radius: 0.4rem;
`;

const StyledLabel = styled(Label)`
  color: ${palette('primary', 0)};
`;

const TemperatureUnitCard = () => {
  const [temperature, setTemperature] = useState({
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.15,
  });

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'celsius':
        setTemperature({
          celsius: e.target.value,
          fahrenheit: e.target.value * (9 / 5) + 32,
          kelvin: Number(e.target.value) + 273.15,
        });
        break;
      case 'fahrenheit':
        setTemperature({
          celsius: (e.target.value - 32) * (5 / 9),
          fahrenheit: e.target.value,
          kelvin: (e.target.value - 32) * (5 / 9) + 273.15,
        });
        break;
      case 'kelvin':
        setTemperature({
          celsius: e.target.value - 273.15,
          fahrenheit: (e.target.value - 273.15) * (9 / 5) + 32,
          kelvin: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  return (
    <MainWrapper>
      <InfoRow>
        <StyledLabel>Celsius:</StyledLabel>
        <StyledInput
          type='text'
          id='celsius'
          onChange={handleChange}
          value={temperature.celsius}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Fahrenheit:</StyledLabel>
        <StyledInput
          type='text'
          id='fahrenheit'
          onChange={handleChange}
          value={temperature.fahrenheit}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Kelvin:</StyledLabel>
        <StyledInput
          type='text'
          id='kelvin'
          onChange={handleChange}
          value={temperature.kelvin}
        />
      </InfoRow>
    </MainWrapper>
  );
};

export default TemperatureUnitCard;
