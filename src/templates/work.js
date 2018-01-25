import React from 'react';
import Helmet from 'react-helmet';
import glamorous from 'glamorous';

import { ContentPadding } from '@components';

const Content = glamorous.div({
  textAlign: 'center',
  '& h1': {
    marginBottom: '2.45rem',
  },
  '& h1 + h3': {
    marginTop: '-2rem',
  },
});

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <ContentPadding>
      <Helmet title={`${post.frontmatter.title} - Arianna Belotti`} />
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
      }
    }
  }
`;
