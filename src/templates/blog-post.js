import React from 'react';
import Helmet from 'react-helmet';

import { ContentPadding, SharingMetadata } from '@components';

export default function Template({ data, ...props }) {
  const { markdownRemark: post } = data;
  const title = `${post.frontmatter.title} - Arianna Belotti`;
  const pageUrl = `https://ariannabelotti.com${props.location.pathname}`;
  return (
    <ContentPadding>
      <Helmet title={title} />
      <SharingMetadata title={title} description={post.excerpt} url={pageUrl} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </ContentPadding>
  );
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
