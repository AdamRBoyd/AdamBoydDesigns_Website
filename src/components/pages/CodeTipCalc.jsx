import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Icon, Input, Label, PageTitleFrame, Spacer } from '../../components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2rem 2rem 4rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].checked);
  console.log(e.target[1].value);
  console.log(e);
};

const CodeTipCalc = () => {
  return (
    <PageTitleFrame title='Tip Calculator' noBottomRule>
      <Wrapper className='container'>
        <form onSubmit={handleSubmit}>
          <input id='check' type='checkbox' />
          <input id='text' type='text' />
          <button type='submit' value='Submit'>
            Test
          </button>
        </form>
      </Wrapper>
    </PageTitleFrame>
  );
};

export default CodeTipCalc;
