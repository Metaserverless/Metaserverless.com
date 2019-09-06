import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import React, { useCallback, useState } from 'react';

import SectionWithMountains from './bg/SectionWithMountains';
import Command from './command';
import Monospace from './monospace';
import Typewriter from './Typewriter';

const TitleSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const onTitleAnimationEnd = useCallback(() => setShowSubtitle(true), []);

  return (
    <SectionWithMountains>
      <Container>
        <Command variant="h1" gutterBottom>
          <Typewriter onAnimationEnd={onTitleAnimationEnd}>
            metaserverless
          </Typewriter>
        </Command>
        <Fade in={showSubtitle}>
          <Monospace variant="h3">Global Cloud Interactive</Monospace>
        </Fade>
      </Container>
    </SectionWithMountains>
  );
};

export default TitleSection;
