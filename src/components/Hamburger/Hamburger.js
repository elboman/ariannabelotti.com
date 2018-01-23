import React from 'react';
import glamorous from 'glamorous';

import { colors } from '@utils';

const bgColor = {
  backgroundColor: colors.accentDark,
};

const activeBgColor = {
  backgroundColor: colors.accent,
};

const HamburgerInner = glamorous.div({
  ...bgColor,
  ':before': {
    ...bgColor,
  },
  ':after': {
    ...bgColor,
  },
});

import './Hamburger.css';

export const Hamburger = ({ active, ...rest }) => (
  <div
    {...rest}
    className={`hamburger hamburger--squeeze ${active ? 'is-active' : ''}`}
  >
    <div className="hamburger-box">
      <HamburgerInner className="hamburger-inner" />
    </div>
  </div>
);
