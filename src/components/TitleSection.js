import Fade from '@material-ui/core/Fade';
import React from 'react';
import BaseSection from './BaseSection';
import SectionWithMountains from './bg/SectionWithMountains';
import Monospace from './monospace';

const TitleSection = () => (
  <BaseSection
    sectionComponent={SectionWithMountains}
    titleVariant="h1"
    title="metaserverless"
  >
    {showSubtitle => (
      <Fade in={showSubtitle}>
        <Monospace variant="h3">Global Cloud Interactive</Monospace>
      </Fade>
    )}
  </BaseSection>
);

export default TitleSection;
