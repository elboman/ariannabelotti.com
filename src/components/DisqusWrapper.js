import React from 'react';
import glamorous from 'glamorous';

import { media } from '@utils';

const WithPaddingTop = glamorous.div({
  padding: '3rem 1rem 0',
  [media.desktop]: {
    padding: '3rem 6rem 0',
  },
});

export const DisqusWrapper = props => <WithPaddingTop {...props} />;
