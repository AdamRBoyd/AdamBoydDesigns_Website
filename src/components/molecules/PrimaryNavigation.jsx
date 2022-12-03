import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import Link from '../atoms/Link';

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  margin: 0.5rem 3rem 0.5rem 0;
  a {
    font-weight: 300;
    color: ${palette('grayscale', 3)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('primary', 0)};
    }
  }
`;

const PrimaryNavigation = (props) => {
  return (
    <StyledNav {...props}>
      <Link
        to='/shop'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Shop
      </Link>
      <Link
        to='/gallery'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Gallery
      </Link>
      <Link
        to='/about'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        About
      </Link>
      <Link
        to='/contact'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Contact
      </Link>
      <Link
        to='/code'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Code
      </Link>
    </StyledNav>
  );
};

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
};

export default PrimaryNavigation;
