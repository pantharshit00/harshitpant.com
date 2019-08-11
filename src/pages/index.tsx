import * as React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/seo';
import ProfileImageHeroSection from '@components/ProfileImageHeroSection';
import AboutMeSection from '@components/AboutMeSection';
import ProjectShowcase from '@components/ProjectShowcase';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileImageHeroSection />
    <AboutMeSection />
    <ProjectShowcase />
  </Layout>
);

export default IndexPage;
