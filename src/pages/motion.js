import React from 'react';
import { Link } from 'gatsby';
import _get from 'lodash/get';
import { graphql } from 'gatsby';

import {
  App,
  MainContainer,
  ContentWrapper,
  GridWrapper,
  VideoWork,
  ImageWork,
} from '@components';

const MotionPage = ({ data }) => {
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
        src: work.frontmatter.coverimage.childImageSharp.resolutions.src,
      };
    return (
      <Link to={`/motion/${work.frontmatter.slug}`} key={work.id}>
        <WorkComponent
          key={work.id}
          {...workProps}
          overlay={work.frontmatter.overlay}
        />
      </Link>
    );
  });

  return (
    <App>
      <MainContainer>
        <ContentWrapper>
          <GridWrapper>{allWorks}</GridWrapper>
        </ContentWrapper>
      </MainContainer>
    </App>
  );
};

export default MotionPage;

export const query = graphql`
  query MotionQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fields: { sourceInstanceName: { eq: "motion" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
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
                resolutions(width: 800) {
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
