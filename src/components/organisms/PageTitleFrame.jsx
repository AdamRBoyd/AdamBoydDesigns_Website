import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import Heading from '../atoms/Heading';
import Spacer from '../atoms/Spacer';
import HorizontalRule from '../atoms/HorizontalRule';
import { Settings } from '../atoms/JSONListings';

const { saleStart, saleEnd } = Settings.sale;
const today = new Date();
const start = new Date(saleStart);
const end = new Date(saleEnd);
const saleOn = today > start && today < end;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1.5rem;
`;

const HeadingWrapper = styled(Heading)`
  align-self: center;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  font-weight: 500;
  font-size: 1.85rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-transform: uppercase;
`;

const SubtitleWrapper = styled.div`
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 80%;
`;

const PageTitleFrame = ({
  alignLeft,
  children,
  title,
  subtitle,
  noBottomRule,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {saleOn && <Spacer padding='large' />}
      <HeadingWrapper>{title || 'OOPS!'}</HeadingWrapper>
      {subtitle && <SubtitleWrapper>{subtitle}</SubtitleWrapper>}
      <HorizontalRule />
      {children}
      <Spacer padding='small' />
      {!noBottomRule && <HorizontalRule />}
      <Spacer padding='small' />
    </Wrapper>
  );
};

PageTitleFrame.propTypes = {
  alignLeft: PropTypes.bool,
  children: PropTypes.node,
  noBottomRule: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default PageTitleFrame;
