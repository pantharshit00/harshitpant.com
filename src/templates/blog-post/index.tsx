import * as React from 'react';
import Layout from '@components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import * as L from './styles';

const BlogPost: React.FC<any> = ({ data }) => {
  const post = data.mdx;
  const tag =
    post.frontmatter.tags.length > 0
      ? post.frontmatter.tags[0]
      : 'uncategorized';
  return (
    <Layout>
      <L.Container>
        <L.Header>
          <div className="post__meta">
            <span className="date">{post.frontmatter.date}</span>
            <span className="divider">/</span>
            <Link to={`/tag/${tag}`} className="tag">
              {tag}
            </Link>
          </div>
          <h1 className="post__title">{post.frontmatter.title}</h1>
        </L.Header>
        <L.HeroContainer>
          <Img
            style={{ zIndex: -1 }}
            fluid={post.frontmatter.cover.childImageSharp.fluid}
          />
        </L.HeroContainer>

        <L.ArticleSection>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <div>
            Tags:{' '}
            {post.frontmatter.tags.map((t: string) => (
              <Link
                key={`${post.id}-${t}`}
                style={{ marginLeft: '0.4rem', marginRight: '0.4rem' }}
                to={`/tag/${t}`}
              >
                {t}
              </Link>
            ))}
          </div>
        </L.ArticleSection>
      </L.Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt
      frontmatter {
        title
        tags
        date(formatString: "DD MMMM YYYY")
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
`;

export default BlogPost;
