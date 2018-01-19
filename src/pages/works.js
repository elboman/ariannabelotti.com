import React from 'react';
import Link from 'gatsby-link';
import glamorous, { Video } from 'glamorous';
import _get from 'lodash/get';

import { media, font } from '@utils';
import { ContentWrapper, VideoWork, ImageWork } from '@components';

const GridWrapper = glamorous.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gridGap: '2rem',
  [media.desktop]: {
    gridGap: '1rem',
  },
});

const WorksPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const works = edges.map(single => single.node);

  const allWorks = works.map(work => {
    const isVideoCover = !!_get(
      work,
      'frontmatter.coverimage.fields.publicUrl'
    );
    const WorkComponent = isVideoCover ? VideoWork : ImageWork;
    const workProps = isVideoCover
      ? {
          url: work.frontmatter.coverimage.fields.publicUrl,
        }
      : {
          src: work.frontmatter.coverimage.childImageSharp.responsiveSizes.src,
        };
    return (
      <Link to={`/works/${work.frontmatter.slug}`}>
        <WorkComponent
          key={work.id}
          {...workProps}
          overlay={work.frontmatter.overlay}
        />
      </Link>
    );
  });

  return (
    <ContentWrapper>
      <GridWrapper>{allWorks}</GridWrapper>
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
            overlay {
              title
              role
            }
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
