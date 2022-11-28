import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import Paragraph from '../atoms/Paragraph';

const Wrapper = styled.div`
  background-color: ${palette('black', 0)};
  padding: 0.75rem;
`;

const Credits = styled(Paragraph)`
  display: flex;
  justify-content: flex-end;
  color: ${palette('grayscale', 5, true)};
  vertical-align: center;
  text-align: right;
  margin: 0;
`;

const Footer = (props) => {
  return (
    <Wrapper>
      <Credits>&copy; 2022 Adam Boyd Designs</Credits>
    </Wrapper>
  );
};

export default Footer;
