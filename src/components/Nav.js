import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import { withTheme } from '@material-ui/styles';
import React, { useCallback, useState } from 'react';
import NavDrawer from './NavDrawer';

const MenuButton = withTheme(styled(IconButton)`
  margin-right: ${props => props.theme.spacing(2)}px;
`);

const Nav = () => {
  const trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <Slide direction="down" in={trigger}>
      <AppBar>
        <Toolbar>
          <MenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openDrawer}
          >
            <MenuIcon />
          </MenuButton>
          <NavDrawer open={drawerOpen} onClose={closeDrawer} />
          <Typography variant="h6">Metaserverless</Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Nav;
