import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { font, palette } from 'styled-theme';
import { switchProp } from 'styled-tools';

import Link from './Link';
import Icon from './Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  ${switchProp('position', {
    center: css`
      justify-content: center;
    `,
    left: css`
      justify-content: flex-start;
    `,
  })};
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const StyledBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: ${palette('grayscale', 7)};
  border-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 2rem;
  width: 7rem;
  margin-top: -0.5rem;
  padding: 0 1rem 0 0.5rem;
`;

const StyledIcon = styled(Icon)`
  height: 1rem;
  width: 1rem;
  margin-right: 0.6rem;
  margin-top: -0.2rem;
  color: ${palette('primary', 1)};
`;

const BackArrow = ({ to, position, ...props }) => {
  return (
    <Wrapper position={position}>
      <StyledLink to={to}>
        <StyledBackground>
          <StyledIcon icon='left_arrow' />
          Back
        </StyledBackground>
      </StyledLink>
    </Wrapper>
  );
};

BackArrow.propTypes = {
  to: PropTypes.string.isRequired,
  position: PropTypes.string,
};

BackArrow.defaultProps = {
  to: '/',
  position: 'center',
};

export default BackArrow;
