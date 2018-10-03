const path = require('path');

exports.modifyWebpackConfig = function({ config, env }) {
  config._config.resolve.alias = {
    '@components': path.resolve('src/components/'),
    '@utils': path.resolve('src/utils/'),
    '@pages': path.resolve('src/pages/'),
    '@assets': path.resolve('src/assets/'),
  };
  return config;
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators;

  // Redirects

  // special redirect for homepage
  createRedirect({
    fromPath: `/`,
    isPermanent: false,
    redirectInBrowser: true,
    toPath: `/art`,
  });

  // permanent redirects
  const permanentRedirects = {
    '/works': '/motion',
    '/works/gif-collection': '/motion/gif-collection',
    '/works/freedom-in-thought': '/motion/freedom-in-thought-part1',
    '/motion/freedom-in-thought': '/motion/freedom-in-thought-part1',
    '/art/samurai-dojo': '/art/hato',
    '/art/inktober-2017': '/art/sketchbook',
  };

  Object.keys(permanentRedirects).forEach(from => {
    const to = permanentRedirects[from];
    createRedirect({
      fromPath: from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: to,
    });
  });

  // Pages

  const BlogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const WorkTemplate = path.resolve(`src/templates/work.js`);

  return graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              slug
              title
            }
            fields {
              sourceInstanceName
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const blogPosts = result.data.allMarkdownRemark.edges.filter(
      single => single.node.fields.sourceInstanceName === 'blog'
    );
    const motion = result.data.allMarkdownRemark.edges.filter(
      single => single.node.fields.sourceInstanceName === 'motion'
    );
    const art = result.data.allMarkdownRemark.edges.filter(
      single => single.node.fields.sourceInstanceName === 'art'
    );

    blogPosts.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: BlogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });

    motion.forEach(({ node }) => {
      createPage({
        path: `/motion/${node.frontmatter.slug}`,
        component: WorkTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });

    art.forEach(({ node }) => {
      createPage({
        path: `/art/${node.frontmatter.slug}`,
        component: WorkTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
