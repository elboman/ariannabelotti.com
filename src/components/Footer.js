import React from 'react';
import glamorous from 'glamorous';

import { SocialIcons } from '@components';
import { font, colors } from '@utils';

const Wrapper = glamorous.div({
  marginBottom: '2rem',
  textAlign: 'center',
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  fontFamily: font.title,
  fontWeight: '600',
  color: colors.lightGrey,
});

export const Footer = () => (
  <Wrapper>
    <SocialIcons />
    <p>&copy;{` Arianna Belotti ${new Date().getFullYear()}`}</p>
  </Wrapper>
);
