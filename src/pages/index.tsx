import * as React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/seo';
import ProfileImageHeroSection from '@components/ProfileImageHeroSection';
import AboutMeSection from '@components/AboutMeSection';
import ProjectShowcase from '@components/ProjectShowcase';
import BlogPreviewSection from '@components/BlogPreviewSection';
import ContactSection from '@components/ContactSection';
import useRecentBlogs from '@utils/useRecentBlogs';

const IndexPage = () => {
  const data = useRecentBlogs();

  return (
    <Layout>
      <SEO title="Home" />
      <ProfileImageHeroSection />
      <AboutMeSection />
      <ProjectShowcase />
      <BlogPreviewSection data={data} />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
