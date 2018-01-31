import React from 'react';
import glamorous from 'glamorous';

const WithPaddingTop = glamorous.div({
  padding: '6rem 0 3rem',
});

export const ContentPadding = props => <WithPaddingTop {...props} />;
