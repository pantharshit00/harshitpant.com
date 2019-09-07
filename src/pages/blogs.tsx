import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '@components/Layout';
import BlogPreviewSection from '@components/BlogPreviewSection';

const Blogs: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
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
  `);
  return (
    <Layout>
      <BlogPreviewSection
        data={data.allMdx.nodes}
        title={`Blog (total ${data.allMdx.totalCount})`}
      />
    </Layout>
  );
};

export default Blogs;
