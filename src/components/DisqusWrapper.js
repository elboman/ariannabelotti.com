import React from 'react';
import glamorous from 'glamorous';

import { media } from '@utils';

const WithPaddingTop = glamorous.div({
  backgroundColor: '#f2f2f2',
  padding: '1rem 1rem 0.5rem',
  margin: '0 0 1rem',
  [media.desktop]: {
    padding: '1rem 6rem 0',
  },
});

export const DisqusWrapper = props => <WithPaddingTop {...props} />;
