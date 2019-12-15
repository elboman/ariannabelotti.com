import React from 'react';
import { Link } from 'gatsby';
import glamorous from 'glamorous';

import { App, ContentWrapper } from '@components';
import { media, font, colors } from '@utils';

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
  <App>
    <ContentWrapper>
      <ContentInner>
        <Hero>
          <p>
            Hi, I'm Arianna Belotti, illustrator, concept artist, animator
            currently based in London, UK.
        </p>
        </Hero>
        <Smaller>
          <p>
            I work with amazing people to bring projects to life through concept
          design and art direction (check out{' '}
            <Link to="/art/shidee-rpg-game">Shidee</Link> and{' '}
            <Link to="/motion/freedom-in-thought">Freedom in Thought</Link>). I
            work remotly with clients around the world, in particular US, Canada,
            UK and Italy.
        </p>
          <p>My main passions are 🕹, 🎥 and driking a lot of 🍵.</p>
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
  </App>
);

export default AboutPage;
