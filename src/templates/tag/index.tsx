import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import BlogPreviewSection from '@components/BlogPreviewSection';

const Tags: React.FC<{ data: any; pageContext: any }> = ({
  data,
  ...props
}) => (
  <Layout>
    <BlogPreviewSection
      data={data.allMdx.nodes}
      title={`Posts in #${props.pageContext.tag} (total ${data.allMdx.totalCount})`}
    />
  </Layout>
);

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
      nodes {
        id
        excerpt(pruneLength: 150)
        timeToRead
        frontmatter {
          title
          tags
          cover {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
