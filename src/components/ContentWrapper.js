import React from 'react';
import glamorous from 'glamorous';

import { media } from '@utils';

export const ContentWrapperInner = glamorous.div({
  padding: '6rem 1.5rem 3rem',
  [media.desktop]: {
    padding: '6rem 0 3rem',
  },
});

export const ContentWrapperOuter = glamorous.div({
  [media.desktop]: {
    position: 'relative',
  },
});

export const ContentWrapper = ({ children, ...props }) => (
  <ContentWrapperOuter {...props}>
    <ContentWrapperInner>{children}</ContentWrapperInner>
  </ContentWrapperOuter>
);
