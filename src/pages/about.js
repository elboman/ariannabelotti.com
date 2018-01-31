import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';

import { ContentWrapper, SocialIcons } from '@components';
import { media, font, colors } from '@utils';

import thankYouGif from '@assets/thankyou.gif';

const ContentInner = glamorous.div({
  textAlign: 'center',
  [media.desktop]: {
    width: '100%',
  },
});

const Hero = glamorous.div({
  color: colors.accentDark,
  fontFamily: font.title,
  fontSize: '2.35rem',
  lineHeight: '2.3rem',
  fontWeight: 700,
  width: '40rem',
  margin: '0 auto',
  maxWidth: '100%',
  [media.notMobile]: {
    fontSize: '2.5rem',
  },
});

const Smaller = glamorous.div({
  color: colors.font,
  fontFamily: font.body,
  fontSize: '1.2rem',
  fontWeight: '400',
  width: '40rem',
  margin: '4rem auto 0',
  maxWidth: '100%',
  [media.notMobile]: {
    fontSize: '1.5rem',
  },
});

const MailLink = glamorous.a();

const AboutPage = () => (
  <ContentWrapper>
    <ContentInner>
      <Hero>
        <p>
          Hi! I'm Arianna, a Motion Graphic Designer &amp; Concept Artist
          currently based in London, UK.
        </p>
      </Hero>
      <Smaller>
        <p>
          My skills include conceptualizing characters, props, and environments.
          I also work on 2D motion graphics and animation in general.
        </p>
        <p>Have an interesting project?</p>
        <p>
          Drop me at line at{' '}
          <MailLink href="mailto:hello@ariannabelotti.com">
            hello@ariannabelotti.com
          </MailLink>{' '}
          or you can find me on social networks.
        </p>
      </Smaller>
    </ContentInner>
  </ContentWrapper>
);

export default AboutPage;
