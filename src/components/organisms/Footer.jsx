import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Paragraph } from '../../components';

const Wrapper = styled.div`
  background-color: transparent;
  padding: 0.6rem;
`;

const Credits = styled(Paragraph)`
  display: flex;
  justify-content: flex-end;
  color: ${palette('grayscale', 5, true)};
  font-size: 0.7rem;
  vertical-align: center;
  text-align: right;
  margin: 0 1rem;
`;

const Footer = (props) => {
  return (
    <Wrapper>
      <Credits>&copy; 2022 Adam Boyd Designs</Credits>
    </Wrapper>
  );
};

export default Footer;
