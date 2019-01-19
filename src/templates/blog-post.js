import React from 'react';
import Helmet from 'react-helmet';
import _get from 'lodash/get';
import ReactDisqusThread from 'react-disqus-thread';

import {
  ContentPadding,
  MainContainer,
  SharingMetadata,
  DisqusWrapper,
} from '@components';

export default function Template({ data, ...props }) {
  const { markdownRemark: post } = data;
  const title = `${post.frontmatter.title} - Arianna Belotti`;
  const pageUrl = `https://ariannabelotti.com${props.location.pathname}`;
  const coverImage = _get(
    post,
    'frontmatter.coverimage.childImageSharp.responsiveSizes.src',
    ''
  );
  return (
    <div>
      <MainContainer>
        <ContentPadding>
          <Helmet title={title} />
          <SharingMetadata
            title={title}
            description={post.excerpt}
            url={pageUrl}
            imgUrl={coverImage}
          />
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </ContentPadding>
      </MainContainer>
      <DisqusWrapper>
        <MainContainer>
          <ReactDisqusThread
            shortname="ariannabelotti"
            identifier={`ariannabelotti-${post.frontmatter.slug}`}
            title={post.frontmatter.title}
            url={pageUrl}
          />
        </MainContainer>
      </DisqusWrapper>
    </div>
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
