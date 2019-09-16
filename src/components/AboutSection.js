import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import SectionWithSpaceObjects from './bg/SectionWithSpaceObjects';
import SectionAnchor from './SectionAnchor';

const AboutSection = () => (
  <SectionWithSpaceObjects>
    <SectionAnchor name="about" />
    <Container>
      <Typography variant="h3" component="p">
        Open-source technology stack that unites hosting providers around the
        world into global distributed cloud platform and allows to quickly
        develop and deploy interactive applications in different applied fields
        like IoT, eCommerce, ERP, CRM, computer games, and messaging services.
      </Typography>
    </Container>
  </SectionWithSpaceObjects>
);

export default AboutSection;
