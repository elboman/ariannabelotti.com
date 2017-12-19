import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { SocialIcons } from '@components';
import { media, font } from '@utils';

import thankYouGif from '@assets/thankyou.gif';

const ContentWrapper = styled.div`
  padding: 6rem 0 0;
  ${media.desktop`
    height: 100%;
    position: relative;
  `};
`;

const ContentInner = styled.div`
  ${media.desktop`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `};
`;

const Hero = styled.div`
  font-family: ${font.title};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.accentDark};
  font-weight: 700;

  ${media.notMobile`
    font-size: 2.5rem;
  `};
`;

const Smaller = styled.div`
  font-family: ${font.body};
  font-size: 1.2rem;
  color: ${props => props.theme.colors.font};
  font-weight: 400;
  margin-bottom: 2rem;

  ${media.notMobile`
    font-size: 1.5rem;
  `};
`;

const SCSocialIconsContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SCGifWrapper = styled.div`
  width: 16rem;
  margin: 0 auto;
`;

const MailLink = styled.a``;

const IndexPage = () => (
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

export default IndexPage;
