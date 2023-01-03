import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { Button, Heading, Icon, Input, PageTitleFrame } from '../../components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  margin: 1rem 0;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
  border-radius: 0.5rem;
`;

const StyledButton = styled(Button)``;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${palette('primary', 0)};
  background-color: transparent;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  padding: 0 4rem 3rem;
  margin: 1.5rem;
  list-style-type: none;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  font-family: ${font('primary')};
  font-size: 1.5rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px dashed ${palette('grayscale', 4)};
`;

const StyledHeading = styled(Heading)`
  border-bottom: 2px solid ${palette('grayscale', 4)};
  font-family: ${font('primary')};
  font-size: 2.5rem;
`;

const StyledIcon = styled(Icon)``;

const CodeToDo = () => {
  let local = localStorage.getItem('ToDo');
  const [list, updateList] = useState(local ? JSON.parse(local) : []);

  function storeValues(arr) {
    updateList(arr);
    window.localStorage.setItem('ToDo', JSON.stringify(arr));
  }

  const handleItemClick = (e) => {
    const id = e.target.parentElement.id;
    let newList = list.slice();
    newList[id].done = !newList[id].done;
    storeValues(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = list.slice();
    newList.push({ item: e.target[0].value, done: false });
    storeValues(newList);
    e.target.reset();
  };

  const handleDelete = (e) => {
    const id = Number(e.target.parentElement.id);
    let newList = list;
    newList.splice(id, 1);
    newList = newList.slice();
    storeValues(newList);
  };

  return (
    <PageTitleFrame title='To Do List' noBottomRule>
      <MainWrapper>
        <StyledForm onSubmit={handleSubmit} id='addForm'>
          <StyledInput type='text' />
          <StyledButton
            type='submit'
            form='addForm'
            value='Submit'
            variant='primary'
          >
            Add New
          </StyledButton>
        </StyledForm>
        {list && (
          <>
            <ListWrapper>
              <StyledHeading>To Do:</StyledHeading>
              {list.map((item, index) => (
                <ItemWrapper id={index} key={index}>
                  <ListItem
                    onClick={handleItemClick}
                    key={`Item${index}`}
                    style={
                      item.done
                        ? {
                            textDecoration: 'line-through',
                            color: '#e0e0e0',
                          }
                        : {}
                    }
                  >
                    {item.item}
                  </ListItem>
                  <StyledIcon
                    name='trash'
                    icon='trashIcon'
                    id={index}
                    key={`Delete${index}`}
                    onClick={handleDelete}
                  />
                </ItemWrapper>
              ))}
            </ListWrapper>
          </>
        )}
      </MainWrapper>
    </PageTitleFrame>
  );
};

export default CodeToDo;
