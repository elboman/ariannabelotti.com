module.exports = {
  siteMetadata: {
    title: `Arianna Belotti`,
    siteUrl: `https://www.ariannabelotti.com`,
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-gfonts`,
      options: {
        fonts: [`Spectral:300,300i,400,400i,700`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-71636045-3',
      },
    },
    // Transformers
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
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
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                block: 'content-block',
                video: 'video-wrapper',
                videoSquare: 'video-square',
              },
            },
          },
          {
            resolve: 'gatsby-remark-shortcodes',
            options: {
              shortcodes: {
                startBlock: '{{',
                endBlock: '}}',
              },
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    // sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_motion`,
        name: 'motion',
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
        instanceNames: ['motion'],
      },
    },
    'gatsby-remark-source-instance',
    'gatsby-plugin-netlify',
  ],
};
