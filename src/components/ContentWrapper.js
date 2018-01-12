import glamorous from 'glamorous';

import { media } from '@utils';

export const ContentWrapperInner = glamorous.div({
  padding: '6rem 0',
});

export const ContentWrapperOuter = glamorous.div({
  [media.desktop]: {
    height: '100%',
    position: 'relative',
  },
});

export const ContentWrapper = ({ children, ...props }) => (
  <ContentWrapperOuter {...props}>
    <ContentWrapperInner>{children}</ContentWrapperInner>
  </ContentWrapperOuter>
);
