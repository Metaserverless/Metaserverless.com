import styled from '@emotion/styled';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AppsIcon from '@material-ui/icons/Apps';
import CloudIcon from '@material-ui/icons/Cloud';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import StarIcon from '@material-ui/icons/Star';
import StorageIcon from '@material-ui/icons/Storage';
import { withTheme } from '@material-ui/styles';
import React, { useCallback, useState } from 'react';
import SectionWithCogs from './bg/SectionWithCogs';
import Command from './Command';
import FullHeightCard from './FullHeightCard';
import SessionAnchor from './SessionAnchor';
import Typewriter from './Typewriter';

const HorizontalCard = styled(FullHeightCard)`
  display: flex;
  align-items: center;
`;

const CardIconContainer = withTheme(styled.div`
  padding: ${props => props.theme.spacing(2)}px;
`);

const IdeaCard = props => (
  <Grid item xs={12} md={4}>
    <Grow in={props.show} timeout={props.timeout}>
      <HorizontalCard>
        <CardIconContainer>
          <props.iconComponent color="primary" style={{ fontSize: '64px' }} />
        </CardIconContainer>
        <CardContent>
          <Typography variant="h5" component="p">
            {props.title}
          </Typography>
        </CardContent>
      </HorizontalCard>
    </Grow>
  </Grid>
);

const KeyIdeasSection = () => {
  const [showContent, setShowContent] = useState(false);
  const onTitleAnimationEnd = useCallback(() => setShowContent(true), []);

  return (
    <SectionWithCogs>
      <SessionAnchor name="key-ideas" />
      <Container>
        <Command variant="h2" gutterBottom>
          <Typewriter onAnimationEnd={onTitleAnimationEnd}>
            technology --key-ideas
          </Typewriter>
        </Command>
        <Grid container justify="center" alignItems="stretch" spacing={2}>
          <IdeaCard
            show={showContent}
            timeout={0}
            iconComponent={SettingsApplicationsIcon}
            title="Stateful cloud applications"
          />
          <IdeaCard
            show={showContent}
            timeout={500}
            iconComponent={AppsIcon}
            title="Microisolation (applications consolidation)"
          />
          <IdeaCard
            show={showContent}
            timeout={1000}
            iconComponent={AirportShuttleIcon}
            title="Hosting roaming and resource market"
          />
          <IdeaCard
            show={showContent}
            timeout={1500}
            iconComponent={StorageIcon}
            title="Application server's built-in big-memory database"
          />
          <IdeaCard
            show={showContent}
            timeout={2000}
            iconComponent={CompareArrowsIcon}
            title="Interactivity (Websockets, TCP, TLS support)"
          />
          <IdeaCard
            show={showContent}
            timeout={2500}
            iconComponent={CloudIcon}
            title="Private, public, and hybrid clouds"
          />
          <IdeaCard
            show={showContent}
            timeout={3000}
            iconComponent={StarIcon}
            title="Open-source core"
          />
        </Grid>
      </Container>
    </SectionWithCogs>
  );
};

export default KeyIdeasSection;
