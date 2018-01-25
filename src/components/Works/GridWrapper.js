import React from 'react';
import glamorous from 'glamorous';

import { media } from '@utils';

export const GridLayout = glamorous.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gridGap: '2rem',
  [media.desktop]: {
    gridGap: '1rem',
  },
});

export const GridWrapper = props => <GridLayout {...props} />;
