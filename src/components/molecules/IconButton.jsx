import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Icon } from '../../components';

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
`;

const IconButton = ({ icon, children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Icon icon={icon} />
    </StyledButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconButton;
