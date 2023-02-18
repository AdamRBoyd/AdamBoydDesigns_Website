import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import {
  AnalogClock,
  PageTitleFrame,
  Spacer,
  Button,
  Input,
} from '../../components';

// Just testing out resetting origin after a username change

// Testing out if commit/push issue fixed after changing username
// and again after changing email

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  width: 30%;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
  width: 10rem;
  height: 2rem;
  text-align: center;
  border-radius: 0.5rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

// SECTION: Test Code
const Test = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [inputStartTime, setInputStartTime] = useState('');
  const [timeDifference, setTimeDifference] = useState('00:00');
  const [testTime, setTestTime] = useState('00:00');
  const [testTime2, setTestTime2] = useState('00:00');
  const [testTime3, setTestTime3] = useState('00:00');

  const getTimeDifference = (start, end) => {
    let seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 7;
    weeks %= 4;
    months %= 12;
    years %= 100;

    return `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getInputTimeDifference = (e) => {
    e.preventDefault();
    let [startHours, startMinutes] = inputStartTime.split(':');
    let [endHours, endMinutes] = testTime3.split(':');

    let minutes = endMinutes - startMinutes;
    let hours = endHours - startHours;

    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }

    if (hours < 0) {
      hours += 24;
    }

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    setTimeDifference(`${hours}:${minutes}`);
  };

  const dateToTimeString = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <PageTitleFrame title='Testing Page' noBottomRule>
      <Spacer padding={2} />
      <AnalogClock currentTime={currentTime} />
      <Spacer padding={4} />
      <StyledClock>{currentTime.toLocaleString()}</StyledClock>
      <Spacer padding={2} />
      <button
        onClick={() => {
          setStartTime(currentTime);
          setEndTime(currentTime);
        }}
      >
        Start
      </button>
      <Spacer padding={2} />
      <button onClick={() => setEndTime(currentTime)}>End</button>
      <Spacer padding={2} />
      {startTime.toLocaleString()}
      <Spacer padding={2} />
      {endTime.toLocaleString()}
      <Spacer padding={2} />
      {getTimeDifference(startTime, endTime)}
      <Spacer padding={2} />
      {getTimeDifference(startTime, currentTime)}
      <Spacer padding={2} />
      <StyledForm onSubmit={getInputTimeDifference}>
        <StyledInput
          type='time'
          value={inputStartTime || '00:00'}
          onChange={(e) => setInputStartTime(e.target.value)}
          required
        />
        <StyledInput
          type='time'
          value={testTime3}
          onChange={(e) => setTestTime3(e.target.value)}
          required
        />
        <Spacer padding={2} />
        {inputStartTime}
        <Spacer padding={2} />
        {testTime3}
        <Spacer padding={2} />
        {timeDifference}
        <Spacer padding={2} />
        <StyledButton type='submit' value='Submit'>
          Calc
        </StyledButton>
      </StyledForm>
      <Spacer padding={2} />
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          setTestTime('06:22');
        }}
      >
        <StyledInput
          type='time'
          value={testTime}
          onChange={(e) => setTestTime(e.target.value)}
        />
        <Spacer padding={2} />
        <StyledButton type='submit' value='Submit'>
          Set Time
        </StyledButton>
      </StyledForm>
      <Spacer padding={2} />
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          setTestTime2('22:22');
        }}
      >
        <StyledInput
          type='time'
          value={testTime2}
          onChange={(e) => setTestTime2(e.target.value)}
        />
        <Spacer padding={2} />
        <StyledButton type='submit' value='Submit'>
          Set Time
        </StyledButton>
      </StyledForm>
      <Spacer padding={2} />
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          setTestTime3(dateToTimeString(currentTime));
        }}
      >
        <StyledInput
          type='time'
          value={testTime3}
          onChange={(e) => setTestTime3(e.target.value)}
        />
        <Spacer padding={2} />
        <StyledButton type='submit' value='Submit'>
          Set Time
        </StyledButton>
      </StyledForm>
      <Spacer padding={2} />
    </PageTitleFrame>
  );
};

export default Test;
