import React from 'react';
import { Helmet } from 'react-helmet';

export const Favicons = () => (
  <Helmet>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicons/manifest.json" />
    <link
      rel="mask-icon"
      href="/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="apple-mobile-web-app-title" content="Arianna Belotti" />
    <meta name="application-name" content="Arianna Belotti" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
);
