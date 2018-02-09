import React from 'react';
import glamorous from 'glamorous';

import { media } from '@utils';

const WithPaddingTop = glamorous.div({
  padding: '6rem 1.5rem 3rem',
  [media.desktop]: {
    padding: '6rem 0rem 3rem',
  },
});

export const ContentPadding = props => <WithPaddingTop {...props} />;
