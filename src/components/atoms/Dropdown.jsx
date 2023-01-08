import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import { useState } from 'react';
import { useEffect } from 'react';

const MENU_WIDTH = '150px';

const GroupWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 215px;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 0.95rem;
  cursor: pointer;
`;

const DropDownStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  background-color: ${palette('grayscale', 7)};
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  width: ${MENU_WIDTH};
`;

const DropdownToggle = styled.div`
  ${DropDownStyles}
  top: -1.15rem;
  height: 1.75rem;
  overflow: hidden;
`;

const DropdownMenu = styled.div`
  ${DropDownStyles}
  top: 1rem;
  z-index: 10;
`;

const HiddenDropdownMenu = styled(DropdownMenu)`
  display: none;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -0.85rem;
  left: 0;
`;

const StyledOption = styled.div`
  width: 100%;
  margin: 0 1rem;

  &:hover {
    color: ${palette('grayscale', 0)};
    background-color: ${palette('primary', 3)};
  }

  &:first-child {
    padding: 0.5rem 0 0.3rem;
    border-bottom: 0.2px solid ${palette('grayscale', 5)};
  }
  &:not(:first-child, :last-child) {
    padding: 0.3rem 0;
    border-bottom: 0.2px solid ${palette('grayscale', 5)};
  }
  &:last-child {
    padding: 0.3rem 0 0.5rem;
  }
`;

const Arrow = styled.div`
  border-color: ${palette('grayscale', 2)} transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: ' ';
  display: block;
  position: absolute;
  right: 10px;
  top: 12px;
`;

const OpenArrow = styled(Arrow)`
  border-color: transparent transparent ${palette('grayscale', 2)};
  border-width: 0 5px 5px;
`;

const Dropdown = ({ options, label, onChange, initialValue, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderLabel, setPlaceholderLabel] = useState(
    initialValue || 'Select...'
  );
  const wrapperRef = useRef();

  const setOpen = () => {
    setIsOpen(true);
  };

  const setClose = (e) => {
    setIsOpen(false);
  };

  const setSelected = (e) => {
    setClose();
    if (e.target.id !== 'empty') {
      e.target.value = e.target.id;
      setPlaceholderLabel(e.target.textContent);
      onChange(e);
    }
  };

  const handleDocumentClick = (event) => {
    if (wrapperRef?.current?.contains(event?.target)) {
      // inside click
      return;
    }
    setClose();
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GroupWrapper ref={wrapperRef} {...props}>
      <StyledLabel>{label}</StyledLabel>
      <DropdownToggle onClick={isOpen ? setClose : setOpen}>
        {placeholderLabel}
        {isOpen ? <OpenArrow /> : <Arrow />}
      </DropdownToggle>
      {isOpen && (
        <DropdownMenu onChange={onChange} {...props}>
          {options ? (
            options.map((option) => (
              <StyledOption
                key={option.value}
                id={option.value}
                value={option.value}
                onClick={setSelected}
              >
                {option.label}
              </StyledOption>
            ))
          ) : (
            <StyledOption id={'empty'} value={'empty'} onClick={setSelected}>
              No Options
            </StyledOption>
          )}
        </DropdownMenu>
      )}
      {!isOpen && <HiddenDropdownMenu />}
    </GroupWrapper>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  options: [],
  label: '',
};

export default Dropdown;
