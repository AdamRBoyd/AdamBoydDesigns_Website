import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

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

const WeightUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    microgram: 0,
    milligram: 0,
    gram: 0,
    kilogram: 0,
    mton: 0,
    iton: 0,
    ounce: 0,
    pound: 0,
    uton: 0,
  });

  const measure = [
    'microgram',
    'milligram',
    'gram',
    'kilogram',
    'mton',
    'iton',
    'ounce',
    'pound',
    'uton',
  ];

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'microgram':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'milligram':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'gram':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'kilogram':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'mton':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'iton':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'ounce':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'pound':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      case 'uton':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value,
          gram: e.target.value,
          kilogram: e.target.value,
          mton: e.target.value,
          iton: e.target.value,
          ounce: e.target.value,
          pound: e.target.value,
          uton: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <MainWrapper>
      {measure.map((item, index) => (
        <InfoRow key={item + index}>
          <StyledLabel>
            {item === 'mton'
              ? 'Metric Ton'
              : item === 'uton'
              ? 'US Ton'
              : item === 'iton'
              ? 'Imperial Ton'
              : item}
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

export default WeightUnitCard;
