import React from 'react';
import Helmet from 'react-helmet';

import { ContentPadding } from '@components';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <ContentPadding>
      <Helmet title={`${post.frontmatter.title} - Arianna Belotti`} />
      <div
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
      }
    }
  }
`;
