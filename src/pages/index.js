import React from 'react';
import AboutSection from '../components/AboutSection';
import FunctionalitySection from '../components/FunctionalitySection';
import KeyIdeasSection from '../components/KeyIdeasSection';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import TitleSection from '../components/TitleSection';
import WhoIsSection from '../components/WhoIsSection';
import TeamSection from '../components/TeamSection';

const IndexPage = () => (
  <Layout title="Metaserverless">
    <Nav />
    <TitleSection />
    <AboutSection />
    <WhoIsSection />
    <KeyIdeasSection />
    <FunctionalitySection />
    <TeamSection />
  </Layout>
);

export default IndexPage;
