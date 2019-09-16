import React from 'react';
import BaseSection from './BaseSection';
import SectionWithAnchors from './bg/SectionWithAnchors';

/*
# Development:

Rapid API builder for backend using either CLI or GUI
Automated lifecycle: CI, linting, building, compiling, transpiling
Unit-testing, integration-tests and load-testing all in one complex solution
Auto documentation generation
Code repository maintenance and built-in version control system
Zero-downtime deployment

# Backend

Transparent scaling
Cloudware monitoring and maintenance
Logging and statistics
Authentication and sessions

# Storage

Storage for data and files (distributed data warehouse and CDN publication)
Big-data and big-memory management infrastructure including distributed queries

# User-Backend interaction

Network and applied code security
Data-, event-, video-, audio-streaming over cluster and to client apps
*/

const FunctionalitySection = () => (
  <BaseSection
    anchor="features"
    sectionComponent={SectionWithAnchors}
    title="functionality --out-of-the-box"
  />
);

export default FunctionalitySection;
