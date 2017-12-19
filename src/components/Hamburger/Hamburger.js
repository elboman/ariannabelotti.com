import React from 'react';

import './Hamburger.css';

export const Hamburger = ({ active, ...rest }) => (
  <div
    {...rest}
    className={`hamburger hamburger--squeeze ${active ? 'is-active' : ''}`}
  >
    <div className="hamburger-box">
      <div className="hamburger-inner" />
    </div>
  </div>
);
