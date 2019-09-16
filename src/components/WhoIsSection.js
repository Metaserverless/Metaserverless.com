import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import BusinessIcon from '@material-ui/icons/Business';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { withTheme } from '@material-ui/styles';
import React from 'react';
import BaseSection from './BaseSection';
import SectionWithConfetti from './bg/SectionWithConfetti';
import FullHeightCard from './FullHeightCard';

const StretchedCard = styled(FullHeightCard)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const ClientCardMedia = withTheme(styled(CardMedia)`
  background-color: ${props => props.theme.palette.primary.dark};
  text-align: center;
`);

const ClientCard = props => (
  <Grid item xs={12} md={4}>
    <Grow in={props.show} timeout={props.timeout}>
      <StretchedCard>
        <div>
          <ClientCardMedia>
            <props.iconComponent style={{ fontSize: '128px' }} />
          </ClientCardMedia>
          <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
              {props.title}
            </Typography>
            <Typography>{props.text}</Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button color="primary">Learn more</Button>
        </CardActions>
      </StretchedCard>
    </Grow>
  </Grid>
);

const WhoIsSection = () => (
  <BaseSection
    anchor="whom-it-is-for"
    sectionComponent={SectionWithConfetti}
    title="whois --our-customer"
  >
    {showContent => (
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <ClientCard
          show={showContent}
          iconComponent={DeveloperBoardIcon}
          title="Hosting providers"
          text="Unite into global virtual provider to be larger, stronger, and closer toward the user than others."
        />
        <ClientCard
          show={showContent}
          timeout={1000}
          iconComponent={BusinessIcon}
          title="Business"
          text="Uses the most distributed, cheap, and flexible resources to develop their own business idea, private or public, easily."
        />
        <ClientCard
          show={showContent}
          timeout={2000}
          iconComponent={KeyboardIcon}
          title="Developers"
          text="No longer depend on a vendor, but contribute to and benefit from all-in-one open-source solution."
        />
      </Grid>
    )}
  </BaseSection>
);

export default WhoIsSection;
