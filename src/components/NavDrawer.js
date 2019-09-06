import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';
import React from 'react';

const MenuItem = props => (
  <ListItem button component="a" href={props.href} onClick={props.onClose}>
    <ListItemIcon>
      <props.iconComponent />
    </ListItemIcon>
    <ListItemText primary={props.text} />
  </ListItem>
);

const NavDrawer = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <Box width={250}>
      <List>
        <MenuItem
          text="About"
          href="#about"
          iconComponent={InfoIcon}
          onClose={onClose}
        />
        <MenuItem
          text="Whom it is for"
          href="#whom-it-is-for"
          iconComponent={ContactsIcon}
          onClose={onClose}
        />
        <MenuItem
          text="Key ideas"
          href="#key-ideas"
          iconComponent={VpnKeyIcon}
          onClose={onClose}
        />
        <MenuItem
          text="Features"
          href="#features"
          iconComponent={ListIcon}
          onClose={onClose}
        />
        <MenuItem
          text="Team"
          href="#team"
          iconComponent={PeopleIcon}
          onClose={onClose}
        />
      </List>
    </Box>
  </Drawer>
);

export default NavDrawer;
