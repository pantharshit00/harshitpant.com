import { useStaticQuery, graphql } from 'gatsby';

const useRecentBlogs = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(
          filter: { frontmatter: { draft: { ne: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
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
    `
  );
  return data.allMdx.nodes;
};

export default useRecentBlogs;
