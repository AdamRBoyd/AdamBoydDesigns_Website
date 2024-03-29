import { createElement } from 'react';
import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`;

const styles = css`
  font-family: ${font('primary')};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${palette('grayscale', 1)};
`;

const Heading = styled(
  ({ level, children, reverse, palette, theme, ...props }) =>
    createElement(`h${level}`, props, children)
)`
  ${styles}
`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
};

export default Heading;
