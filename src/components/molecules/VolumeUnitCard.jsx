import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Input, Label, UnderConstruction } from '../../components';

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
  width: 13rem;
  background-color: transparent;
  color: ${palette('grayscale', 0)};
  border-radius: 0.4rem;
  text-overflow: ellipsis;
`;

const StyledLabel = styled(Label)`
  color: ${palette('primary', 0)};
  text-transform: capitalize;
`;

const VolumeUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    teaspoon: 0,
    tablespoon: 0,
    cup: 0,
    pint: 0,
    quart: 0,
    gallon: 0,
    milliliter: 0,
    liter: 0,
    meter: 0,
    inch: 0,
    foot: 0,
  });

  const measure = [
    'teaspoon',
    'tablespoon',
    'cup',
    'pint',
    'quart',
    'gallon',
    'milliliter',
    'liter',
    'meter',
    'inch',
    'foot',
  ];

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'teaspoon':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'tablespoon':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'cup':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'pint':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'quart':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'gallon':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'milliliter':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'liter':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'meter':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'inch':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      case 'foot':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value,
          cup: e.target.value,
          pint: e.target.value,
          quart: e.target.value,
          gallon: e.target.value,
          milliliter: e.target.value,
          liter: e.target.value,
          meter: e.target.value,
          inch: e.target.value,
          foot: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <MainWrapper>
      <UnderConstruction />
      {measure.map((item, index) => (
        <InfoRow key={item + index}>
          <StyledLabel>
            {item === 'meter' || item === 'inch' || item === 'foot'
              ? `Cubic ${item}:`
              : `${item}:`}
          </StyledLabel>
          <StyledInput
            type='text'
            id={item}
            onChange={handleChange}
            value={measurements[`${item}`]}
          />
        </InfoRow>
      ))}
    </MainWrapper>
  );
};

export default VolumeUnitCard;
