import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';

import { SocialIcons } from '@components';
import { media, font } from '@utils';

import thankYouGif from '@assets/thankyou.gif';

const ContentWrapper = glamorous.div({
  padding: '6rem 0 0',
  [media.desktop]: {
    height: '100%',
    position: 'relative',
  },
});

const ContentInner = glamorous.div({
  [media.desktop]: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

const Hero = glamorous.div(
  {
    fontFamily: font.title,
    fontSize: '1.5rem',
    fontWeight: 700,
    [media.notMobile]: {
      fontSize: '2.5rem',
    },
  },
  ({ theme }) => ({
    color: theme.main.colors.accentDark,
  })
);

const Smaller = glamorous.div(
  {
    fontFamily: font.body,
    fontSize: '1.2rem',
    fontWeight: '400',
    marginBottom: '2rem',
    [media.notMobile]: {
      fontSize: '1.5rem',
    },
  },
  ({ theme }) => ({
    color: theme.main.colors.font,
  })
);

const SCSocialIconsContainer = glamorous.div({
  textAlign: 'center',
  marginBottom: '2rem',
});

const SCGifWrapper = glamorous.div({
  width: '16rem',
  margin: '0 auto',
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
      <SCSocialIconsContainer>
        <SocialIcons />
      </SCSocialIconsContainer>
    </ContentInner>
  </ContentWrapper>
);

export default AboutPage;
