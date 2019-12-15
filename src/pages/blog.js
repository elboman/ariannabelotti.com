import React from 'react';
import { Link } from 'gatsby';
import glamorous from 'glamorous';
import { format } from 'date-fns';
import { graphql } from 'gatsby';

import { App, MainContainer, ContentPadding } from '@components';

const PostDate = glamorous.span({
  marginRight: '1rem',
});

const StyledLink = glamorous(Link)((props, theme) => ({}));

const BlogPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const posts = edges.map(single => single.node);
  return (
    <App>
      <MainContainer>
        <ContentPadding>
          <h1>Blog</h1>
          {posts.map(({ frontmatter }) => (
            <div key={frontmatter.slug}>
              <PostDate>
                {format(new Date(frontmatter.date), 'dd/MM/yy')}
              </PostDate>
              <StyledLink to={`/blog/${frontmatter.slug}`}>
                <span>{frontmatter.title}</span>
              </StyledLink>
            </div>
          ))}
        </ContentPadding>
      </MainContainer>
    </App>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
      filter: {
        fields: { sourceInstanceName: { eq: "blog" } }
        frontmatter: { published: { eq: true } }
      }
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
