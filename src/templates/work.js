import React from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';

import { ContentPadding, SharingMetadata } from '@components';

const Content = glamorous.div({
  textAlign: 'center',
  '& h1': {
    marginBottom: '2.45rem',
  },
  '& h1 + h3': {
    marginTop: '-2rem',
  },
});

export default function Template({ data, ...props }) {
  const { markdownRemark: post } = data;
  const coverImage =
    post.frontmatter.coverimage.childImageSharp.responsiveSizes.src;
  const pageUrl = `https://ariannabelotti.com${props.location.pathname}`;
  const title = `${post.frontmatter.title} - Arianna Belotti`;
  return (
    <ContentPadding>
      <Helmet title={title} />
      <SharingMetadata title={title} imgUrl={coverImage} url={pageUrl} />
      <Content
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </ContentPadding>
  );
}

export const pageQuery = graphql`
  query SingleWorkQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        coverimage {
          fields {
            publicUrl
          }
          childImageSharp {
            responsiveSizes {
              src
            }
          }
        }
      }
    }
  }
`;
