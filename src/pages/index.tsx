import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import ProfileImageHeroSection from '../components/ProfileImageHeroSection';
import AboutMeSection from '../components/AboutMeSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileImageHeroSection />
    <AboutMeSection />
  </Layout>
);

export default IndexPage;
