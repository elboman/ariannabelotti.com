import React from 'react';
import { css } from 'glamor';
import { ThemeProvider } from 'glamorous';
import Helmet from 'react-helmet';
import Typekit from 'react-typekit';

import { Navbar, MainContent, Footer, Favicons, PhotoswipeGallery } from '@components';

import { colors } from '@utils';

import { globalStyles } from "../../styles/index.css.js";

css.insert(`
  img {
    width: 100%;
  }

  html,
  body,
  body > div,
  body > div > div {
    height:100%;
  }

  h1,h2,h3,h4,h5,h6 {
    line-height: 1.1;
    color: ${colors.accentDark};
    margin: 4rem 0 2rem;
    font-family: 'europa', sans-serif;
  }

  a {
    color: ${colors.accent};
    text-decoration: underline;
  }

  a:hover {
    color: ${colors.accent};
  }

  body {
    color: ${colors.font};
    font-size: 1.3rem;
    line-height: 1.4;
    font-weight: 400;
  }

  div {
    box-sizing: border-box;
  }

  .youtube:hover .social-svg-mask {
    fill: #ff3333 !important;
  }

  .twitter:hover .social-svg-mask {
    fill: #00aced !important;
  }

  .dribbble:hover .social-svg-mask {
    fill: #ea4c89 !important;
  }

  .instagram:hover .social-svg-mask {
    fill: #3f729b !important;
  }

  .twitter-tweet {
    margin: 3.1rem auto !important;
  }
`);

css.insert(globalStyles);

const theme = {
  main: {
    colors: {
      ...colors,
    },
  },
};

const menuItems = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'about',
    url: '/about/',
  },
  {
    label: 'blog',
    url: '/blog/',
  },
];

export const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Arianna Belotti"
        meta={[
          {
            name: 'description',
            content:
              'Motion Graphic Designer & Concept Artist based in London, UK.',
          },
          {
            name: 'keywords',
            content:
              'drawing, concept art, digital painting, motion graphics, motion, art, game art, game design, game concept',
          },
        ]}
      />
      <Favicons />
      <Navbar menu={menuItems} />
      <MainContent>
        {children}
        <Footer />
      </MainContent>
      <PhotoswipeGallery />
      <Typekit kitId="pgg6hwn" />
    </div>
  </ThemeProvider>
);
