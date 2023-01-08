import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const Wrapper = styled.div`
  align-content: center;
  background-color: ${palette('grayscale', 6)};
  border-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  height: 2rem;
  justify-content: center;
  margin-top: -0.5rem;
`;

const StyledLabel = styled.label`
  align-self: center;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0.5rem;
`;

const StyledDropdown = styled.select`
  align-self: center;
  background-color: ${palette('grayscale', 7)};
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  height: 1.75rem;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const StyledOption = styled.option`
  padding: 10rem;
`;

const Dropdown = ({ options, label, onChange, value, ...props }) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledDropdown value={value} onChange={onChange} {...props}>
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledDropdown>
    </Wrapper>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  options: [],
  label: '',
};

export default Dropdown;
