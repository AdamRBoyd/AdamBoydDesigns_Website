import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { Button, Heading, Input, PageTitleFrame } from '../../components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  width: 85%;
  padding: 3rem 1rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  margin: 2rem 2rem 0 0;
  padding: 0 2rem 0 0;
`;

const StyledInput = styled(Input)`
  color: ${palette('grayscale', 3)};
  border: transparent;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)``;

const StyledListButton = styled(Button)``;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  width: 60%;
  padding: 1rem 0 3rem;
`;

const ListHeading = styled(Heading)``;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  color: ${palette('primary', 0)};
  width: 80%;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  width: 100%;
  font-size: 1.2rem;
`;

const CodeWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);

  const workoutTypes = [
    'Chest',
    'Back',
    'Shoulders',
    'Legs',
    'Arms',
    'Core',
    'Cardio',
  ];

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (storedWorkouts) {
      setWorkouts(storedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      setWorkouts([...workouts, { date, type, duration }]);
    } else {
      const newWorkouts = [...workouts];
      newWorkouts[index] = { date, type, duration };
      setWorkouts(newWorkouts);
      setEditing(false);
    }
    setDate('');
    setType('');
    setDuration('');
  };

  const handleEdit = (i) => {
    setEditing(true);
    setIndex(i);
    setDate(workouts[i].date);
    setType(workouts[i].type);
    setDuration(workouts[i].duration);
  };

  const handleDelete = (i) => {
    const newWorkouts = [...workouts];
    newWorkouts.splice(i, 1);
    setWorkouts(newWorkouts);
  };

  return (
    <PageTitleFrame title='Workout Log' noBottomRule>
      <MainWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type='date'
            id='date'
            placeholder='Enter Date'
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <StyledInput
            type='select'
            id='type'
            value={type}
            placeholder='Select a type'
            required
            onChange={(e) => setType(e.target.value)}
          >
            <option value=''>Select a workout type</option>
            {workoutTypes.map((workoutType) => (
              <option key={workoutType} value={workoutType}>
                {workoutType}
              </option>
            ))}
          </StyledInput>
          <StyledInput
            type='text'
            id='duration'
            placeholder='Enter duration in minutes'
            value={duration}
            required
            onChange={(e) => setDuration(e.target.value)}
          />
          <StyledButton type='submit'>
            {editing ? 'Update' : 'Add'} Workout
          </StyledButton>
        </StyledForm>
        <ListContainer>
          <ListHeading>Workouts:</ListHeading>
          <ListWrapper>
            {workouts.map((workout, i) => (
              <ListItem key={i}>
                {workout.date} - {workout.type} - {workout.duration} minutes
                <StyledListButton
                  buttonHeight={1.8}
                  fontSize={0.8}
                  onClick={() => handleEdit(i)}
                >
                  Edit
                </StyledListButton>
                <StyledListButton
                  buttonHeight={1.8}
                  fontSize={0.8}
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </StyledListButton>
              </ListItem>
            ))}
          </ListWrapper>
        </ListContainer>
      </MainWrapper>
    </PageTitleFrame>
  );
};

export default CodeWorkout;
