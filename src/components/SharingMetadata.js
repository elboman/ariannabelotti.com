import React from 'react';
import { Helmet } from 'react-helmet';

export const SharingMetadata = ({
  imgUrl = '/arianna-belotti.jpg',
  url = '',
  title = '',
  description = 'I work with amazing people to bring projects to life through concept design and art direction. I work remotly with clients around the world, in particular US, Canada, UK and Italy.',
  ...rest
}) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={`https://ariannabelotti.com${imgUrl}`}
      />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://ariannabelotti.com${imgUrl}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
