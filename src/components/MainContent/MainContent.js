import React from 'react';
import glamorous from 'glamorous';

import { media } from '@utils';

const Wrapper = glamorous.div({
  maxWidth: '52rem',
  margin: '0 auto',
  padding: '1rem 1.5rem',
  boxSizing: 'border-box',
  zIndex: '1',
  position: 'relative',
  [media.notMobile]: {
    padding: '1rem',
  },
});

export const MainContent = ({ children }) => <Wrapper>{children}</Wrapper>;
