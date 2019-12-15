import React from 'react';
import glamorous from 'glamorous';

import { media } from '@utils';

const Wrapper = glamorous.div({
  padding: 0,
  boxSizing: 'border-box',
  zIndex: '1',
  position: 'relative',
  [media.notMobile]: {
    padding: '0',
  },
});

export const MainContent = ({ children }) => <Wrapper>{children}</Wrapper>;

const Container = glamorous.div({
  maxWidth: '52rem',
  width: '100%',
  margin: '0 auto',
});

export const MainContainer = ({ children }) => (
  <Container>{children}</Container>
);
