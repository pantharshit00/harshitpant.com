import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/seo';
import ProfileImageHeroSection from '@components/ProfileImageHeroSection';
import AboutMeSection from '@components/AboutMeSection';
import ProjectShowcase from '@components/ProjectShowcase';
import BlogPreviewSection from '@components/BlogPreviewSection';
import ContactSection from '@components/ContactSection';

const BLOG_POSTS_QUERY = graphql`
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
`;

const IndexPage = () => {
  const data = useStaticQuery(BLOG_POSTS_QUERY);

  return (
    <Layout>
      <SEO title="Home" />
      <ProfileImageHeroSection />
      <AboutMeSection />
      <ProjectShowcase />
      <BlogPreviewSection data={data.allMdx.nodes} />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
