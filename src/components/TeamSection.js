import React from 'react';
import BaseSection from './BaseSection';
import SectionWithTopography from './bg/SectionWithTopography';

const TeamSection = () => (
  <BaseSection
    anchor="team"
    sectionComponent={SectionWithTopography}
    title="team"
  />
);

export default TeamSection;
