import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import AdbIcon from '@mui/icons-material/Adb';
import { Modal } from '@mui/material';
import { useState } from 'react';
import NewMeeting from '../pages/NewMeeting';

const pages = [
  { text: 'Home', icon: <HomeIcon />, fontSize: '1.25rem' }, // 20px / 16px = 1.25rem
  { text: 'Help', fontSize: '1.25rem' }, // 20px / 16px = 1.25rem
];

const popUpStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: '1rem', // 16px / 16px = 1rem
};

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [newMeetingToggle, setNewMeetingToggle] = useState(false);
  const [meetings, setMeetings] = React.useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: '1rem', // 16px / 16px = 1rem
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '0.2rem', // 0.2px / 16px = 0.0125rem
              color: '#63B4FF',
              textDecoration: 'none',
              fontSize: '3.75rem', // 60px / 16px = 3.75rem
              '&:hover': {
                color: 'skyblue',
              },
            }}
          >
            ONSked
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <IconButton color="inherit" size="large">
                    {page.icon}
                  </IconButton>
                  <Button
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Roboto',
                      fontSize: page.fontSize,
                      color: 'black',
                      marginRight: '4.375rem', // 70px / 16px = 4.375rem
                      marginLeft: '6.25rem', // 100px / 16px = 6.25rem
                    }}
                  >
                    {page.text}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: '1rem' }} /> {/* 16px / 16px = 1rem */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              flexGrow: 1,
              marginRight: '3rem',
            }}
          >
            <Button
              style={{ marginLeft: 'auto', marginRight: '3.125rem', backgroundColor: '#63B4FF' }} // 50px / 16px = 3.125rem
              variant="contained"
              onClick={() => {
                setNewMeetingToggle(!newMeetingToggle);
              }}
            >
              Start New Meeting
            </Button>
          </Box>
          <Modal open={newMeetingToggle}>
            <Box sx={popUpStyle}>
              <NewMeeting setNewMeetingToggle={setNewMeetingToggle} setMeetings={setMeetings} meetings={meetings} />
            </Box>
          </Modal>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '2.8125rem' }} // 45px / 16px = 2.8125rem
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'black' }}>{setting}</Typography> {/* 24px / 16px = 1.5rem */}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
