import React, { useCallback, useState } from 'react';
import Command from './Command';
import SessionAnchor from './SessionAnchor';
import Typewriter from './Typewriter';
import SectionWithTopography from './bg/SectionWithTopography';
import Container from '@material-ui/core/Container';

const TeamSection = () => {
  const [showContent, setShowContent] = useState(false);
  const onTitleAnimationEnd = useCallback(() => setShowContent(true), []);

  return (
    <SectionWithTopography>
      <SessionAnchor name="team" />
      <Container>
        <Command variant="h2" gutterBottom>
          <Typewriter onAnimationEnd={onTitleAnimationEnd}>team</Typewriter>
        </Command>
      </Container>
    </SectionWithTopography>
  );
};

export default TeamSection;
