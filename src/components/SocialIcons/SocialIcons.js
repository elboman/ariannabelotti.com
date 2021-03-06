import React from 'react';
import glamorous from 'glamorous';
import { SocialIcon } from 'react-social-icons';

import { colors } from '@utils';

const socials = [
  {
    url: 'https://www.youtube.com/channel/UCIooJV-Y1F40nDJPRULr_Rg',
    platform: 'youtube',
  },
  {
    url: 'https://twitter.com/_ariabba',
    platform: 'twitter',
  },
  {
    url: 'https://dribbble.com/_ariabba',
    platform: 'dribbble',
  },
  {
    url: 'https://www.instagram.com/_ariabba/',
    platform: 'instagram',
  },
];

const Wrapper = glamorous.div({
  position: 'relative',
  display: 'inline-block',
  '& .social-icon': {
    width: '1.5rem !important',
    height: '1.5rem !important',
    margin: '0.7rem 0.5rem',
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
  '& .social-svg-mask': {
    fill: `${colors.lightGrey} !important`,
  },
});

export const SocialIcons = () => (
  <Wrapper>
    {socials.map(social => (
      <SocialIcon
        key={social.url}
        url={social.url}
        className={social.platform}
      />
    ))}
  </Wrapper>
);
