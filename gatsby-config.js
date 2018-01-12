module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Spectral:300,300i,400,400i,700`],
      },
    },
    // Transformers
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-emoji',
          'gatsby-remark-external-links',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 864,
              linkImagesToOriginal: false,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
    // sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_works`,
        name: 'works',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_posts`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-works-files`,
      options: {
        allowedExtensions: ['mp4'],
      },
    },
    'gatsby-remark-source-instance',
  ],
};
