import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

const StyledSpacer = styled.div`
  ${switchProp('padding', {
    small: css`
      padding: 0.25rem;
    `,
    medium: css`
      padding: 0.5rem;
    `,
    large: css`
      padding: 1rem;
    `,
    xlarge: css`
      padding: 1.5rem;
    `,
    xxlarge: css`
      padding: 3rem;
    `,
  })};
`;

const Spacer = ({ padding, ...props }) => {
  return <StyledSpacer padding={padding} {...props} />;
};

Spacer.propTypes = {
  padding: PropTypes.string,
};

Spacer.defaultProps = {
  padding: 'small',
};

export default Spacer;
