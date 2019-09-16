import React, { useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import Command from './Command';
import Typewriter from './Typewriter';
import SectionAnchor from './SectionAnchor';

const BaseSection = props => {
  const [showContent, setShowContent] = useState(false);
  const onTitleAnimationEnd = useCallback(() => setShowContent(true), []);

  return (
    <props.sectionComponent>
      {props.anchor && <SectionAnchor name={props.anchor} />}
      <Container>
        <Command variant={props.titleVariant} gutterBottom>
          <Typewriter onAnimationEnd={onTitleAnimationEnd}>
            {props.title}
          </Typewriter>
        </Command>
        {props.children && props.children(showContent)}
      </Container>
    </props.sectionComponent>
  );
};

BaseSection.defaultProps = {
  titleVariant: 'h2',
};

export default BaseSection;
