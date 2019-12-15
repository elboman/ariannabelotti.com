import React from 'react';
import glamorous from 'glamorous';

import { colors } from '@utils';
import './Hamburger.css';

const bgColor = {
  backgroundColor: colors.accentDark,
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
