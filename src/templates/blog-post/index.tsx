import * as React from 'react';
import Layout from '@components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import * as L from './styles';

const BlogPost: React.FC<any> = ({ data }) => {
  return (
    <Layout>
      <L.Container>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      body
      excerpt
      frontmatter {
        title
        tags
      }
      fields {
        slug
      }
    }
  }
`;

export default BlogPost;
