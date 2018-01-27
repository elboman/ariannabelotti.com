import React from 'react';
import { Helmet } from 'react-helmet';

export const SharingMetadata = ({
  imgUrl = '',
  url = '',
  title = '',
  description = 'Arianna Belotti portfolio',
  ...rest
}) => {
  console.log(rest);
  return (
    <Helmet>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
