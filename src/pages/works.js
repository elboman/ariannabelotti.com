import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';
import _get from 'lodash/get';

import { media, font } from '@utils';
import { ContentWrapper, VideoWork, ImageWork } from '@components';

const GridWrapper = glamorous.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gridGap: '10px',
});

const WorksPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const works = edges.map(single => single.node);

  const isVideoCover = work =>
    _get(work, 'frontmatter.coverimage.fields.publicUrl');

  const getImageSrc = work =>
    work.frontmatter.coverimage.childImageSharp.responsiveSizes.src;

  const getVideoUrl = work => work.frontmatter.coverimage.fields.publicUrl;

  return (
    <ContentWrapper>
      <GridWrapper>
        {works.map(work => (
          <Link to={`/works/${work.frontmatter.slug}`}>
            {isVideoCover(work) ? (
              <VideoWork key={work.id} url={getVideoUrl(work)} />
            ) : (
              <ImageWork key={work.id} src={getImageSrc(work)} />
            )}
          </Link>
        ))}
      </GridWrapper>
    </ContentWrapper>
  );
};

export default WorksPage;

export const query = graphql`
  query WorksQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fields: { sourceInstanceName: { eq: "works" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            published
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
    }
  }
`;
