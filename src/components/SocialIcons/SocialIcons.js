import React from 'react';
import styled, { injectGlobal } from 'styled-components';
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

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  .social-icon {
    width: 2rem !important;
    height: 2rem !important;
    margin-left: 1rem;
    transition: transform 0.2s ease;

    :hover {
      transform: scale(1.2);
    }
  }

  .social-svg-mask {
    fill: ${colors.lightGrey} !important;
  }
`;

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
