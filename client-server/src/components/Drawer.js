import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function DrawerTemplate(props) {

  const isLoggedLocal = localStorage.getItem('isLogged');

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <h1 align="center">DeepWeb</h1>
        <Divider />
        <List>
            <Link to='/'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='Main page' />
                </ListItemButton>
            </ListItem>
            </Link>
            { !isLoggedLocal ?
            <Link to='/signup'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='Sign up' />
                </ListItemButton>
            </ListItem>
            </Link> : null
            }
        </List>
        <Divider />
        { isLoggedLocal ?
        <List>
            <Link to='/info'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='Modify info' />
                </ListItemButton>
            </ListItem>
            </Link>

            <Link to ='password'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='Modify password' />
                </ListItemButton>
            </ListItem>
            </Link>
        </List> : null
        }
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <div onClick={toggleDrawer('left', true)}>{props.children}</div>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}