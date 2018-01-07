import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';
import { format } from 'date-fns';

import { ContentPadding } from '@components';
import { colors } from '@utils';

const PostDate = glamorous.span({
  marginRight: '1rem',
});

const StyledLink = glamorous(Link)((props, theme) => ({
  color: colors.black,
}));

const BlogPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const posts = edges.map(single => single.node);
  return (
    <ContentPadding>
      <h1>Blog</h1>
      {posts.map(({ frontmatter }) => (
        <div key={frontmatter.slug}>
          <PostDate>{format(new Date(frontmatter.date), 'DD/MM/YY')}</PostDate>
          <StyledLink to={`/blog/${frontmatter.slug}`}>
            <span>{frontmatter.title}</span>
          </StyledLink>
        </div>
      ))}
    </ContentPadding>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`;
