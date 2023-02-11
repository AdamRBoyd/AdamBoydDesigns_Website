import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { AnalogClock, PageTitleFrame, Spacer, Heading } from '../../components';

const StyledClock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  font-family: ${font('primary')};
  font-size: 3rem;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  border: 7px solid ${palette('white', 0)};
  background-color: ${palette('grayscale', 7)};
  color: ${palette('primary', 1)};
  box-shadow: 0px 0px 15px 0px ${palette('grayscale', 4)};
`;

const Test = () => {
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
    <PageTitleFrame title='Testing Page' noBottomRule>
      <Spacer padding={2} />
      <AnalogClock currentTime={currentTime} />
      <Spacer padding={4} />
      <StyledClock>{currentTime.toLocaleString()}</StyledClock>
      <Spacer padding={2} />
    </PageTitleFrame>
  );
};

export default Test;
