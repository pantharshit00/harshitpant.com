import * as React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/Seo';
import ProfileImageHeroSection from '@components/ProfileImageHeroSection';
import AboutMeSection from '@components/AboutMeSection';
import ProjectShowcase from '@components/ProjectShowcase';
import ContactSection from '@components/ContactSection';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ProfileImageHeroSection />
      <AboutMeSection />
      <ProjectShowcase />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
