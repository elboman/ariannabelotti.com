import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { ThemeProvider } from 'glamorous';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Navbar, MainContent } from '@components';

import { colors } from '@utils';

import './index.css';

css.insert(`
  html {
    font-family: 'Spectral', serif;
    font-size: 100%;
    line-height: 1.45rem;
    -webkit-font-smoothing: antialiased;
  }

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
    color: ${colors.black};
    margin: 4rem 0 2rem;
    font-family: 'europa', sans-serif;
  }

  a {
    color: ${colors.font};
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

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Arianna Belotti"
        meta={[
          {
            name: 'description',
            content: 'Arianna Belotti personal portfolio',
          },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Navbar menu={menuItems} />
      <MainContent>{children()}</MainContent>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
