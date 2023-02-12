import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';

import { AnalogClock, DigitalClock } from '../../components';

const ClockContainer = styled.div`
  height: 100%;
  padding: 1rem 3rem;
  border-right: 1px solid ${palette('grayscale', 4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 4rem;
`;

const Clocks = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ClockContainer>
      <AnalogClock currentTime={currentTime} />
      <DigitalClock currentTime={currentTime} />
    </ClockContainer>
  );
};

Clocks.propTypes = {
  currentTime: PropTypes.instanceOf(Date),
};

export default Clocks;
