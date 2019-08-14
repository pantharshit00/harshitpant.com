import * as React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/seo';
import ProfileImageHeroSection from '@components/ProfileImageHeroSection';
import AboutMeSection from '@components/AboutMeSection';
import ProjectShowcase from '@components/ProjectShowcase';
import BlogPreviewSection from '@components/BlogPreviewSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileImageHeroSection />
    <AboutMeSection />
    <ProjectShowcase />
    <BlogPreviewSection />
  </Layout>
);

export default IndexPage;
