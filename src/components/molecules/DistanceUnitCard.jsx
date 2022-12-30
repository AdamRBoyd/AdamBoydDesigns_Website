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
`;

const DistanceUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    centimeter: 0,
    meter: 0,
    kilometer: 0,
    inch: 0,
    foot: 0,
    yard: 0,
    mile: 0,
  });

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'centimeter':
        setMeasurements({
          centimeter: e.target.value,
          meter: (e.target.value * 0.01).toPrecision(5),
          kilometer: e.target.value * 0.00001,
          inch: e.target.value / 2.54,
          foot: e.target.value / 30.48,
          yard: e.target.value / 91.44,
          mile: e.target.value / 160900,
        });
        break;
      case 'meter':
        setMeasurements({
          centimeter: e.target.value * 100,
          meter: e.target.value,
          kilometer: e.target.value * 0.001,
          inch: e.target.value * 39.37,
          foot: e.target.value * 3.281,
          yard: e.target.value * 1.094,
          mile: e.target.value / 1609,
        });
        break;
      case 'kilometer':
        setMeasurements({
          centimeter: e.target.value * 100000,
          meter: e.target.value * 1000,
          kilometer: e.target.value,
          inch: e.target.value * 39370,
          foot: e.target.value * 3281,
          yard: e.target.value * 1094,
          mile: e.target.value / 1.609,
        });
        break;
      case 'inch':
        setMeasurements({
          centimeter: e.target.value * 2.54,
          meter: e.target.value / 39.37,
          kilometer: e.target.value / 39370,
          inch: e.target.value,
          foot: e.target.value / 12,
          yard: e.target.value / 36,
          mile: e.target.value / 63360,
        });
        break;
      case 'foot':
        setMeasurements({
          centimeter: e.target.value * 30.48,
          meter: e.target.value / 3.281,
          kilometer: e.target.value / 3281,
          inch: e.target.value * 12,
          foot: e.target.value,
          yard: e.target.value / 3,
          mile: e.target.value / 5280,
        });
        break;
      case 'yard':
        setMeasurements({
          centimeter: e.target.value * 91.44,
          meter: e.target.value / 1.094,
          kilometer: e.target.value / 1094,
          inch: e.target.value * 36,
          foot: e.target.value * 3,
          yard: e.target.value,
          mile: e.target.value / 1760,
        });
        break;
      case 'mile':
        setMeasurements({
          centimeter: e.target.value * 160900,
          meter: e.target.value * 1609,
          kilometer: e.target.value * 1.609,
          inch: e.target.value * 63360,
          foot: e.target.value * 5280,
          yard: e.target.value * 1760,
          mile: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <MainWrapper>
      <InfoRow>
        <StyledLabel>Centimeter:</StyledLabel>
        <StyledInput
          type='text'
          id='centimeter'
          onChange={handleChange}
          value={measurements.centimeter}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Meter:</StyledLabel>
        <StyledInput
          type='text'
          id='meter'
          onChange={handleChange}
          value={measurements.meter}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Kilometer:</StyledLabel>
        <StyledInput
          type='text'
          id='kilometer'
          onChange={handleChange}
          value={measurements.kilometer}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Inch:</StyledLabel>
        <StyledInput
          type='text'
          id='inch'
          onChange={handleChange}
          value={measurements.inch}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Foot:</StyledLabel>
        <StyledInput
          type='text'
          id='foot'
          onChange={handleChange}
          value={measurements.foot}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Yard:</StyledLabel>
        <StyledInput
          type='text'
          id='yard'
          onChange={handleChange}
          value={measurements.yard}
        />
      </InfoRow>
      <InfoRow>
        <StyledLabel>Mile:</StyledLabel>
        <StyledInput
          type='text'
          id='mile'
          onChange={handleChange}
          value={measurements.mile}
        />
      </InfoRow>
    </MainWrapper>
  );
};

export default DistanceUnitCard;
