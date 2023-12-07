import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  { text: 'Home', icon: <HomeIcon />, fontSize: '1.25rem' }, // 20px / 16px = 1.25rem
  { text: 'Help', fontSize: '1.25rem' }, // 20px / 16px = 1.25rem
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: '1rem', // 16px / 16px = 1rem
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 900,
              margin:0,
              color: '#63B4FF',
              textDecoration: 'none',
              fontSize: '1.75rem', // 60px / 16px = 3.75rem
              marginLeft: '5rem'

            }}
          >
            OnSked
            <h6 className="naw" style={{color: "black", fontSize: "1rem", marginLeft: "-6rem"}}>Where Time Meets Technology</h6>

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
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: '5rem'}}>
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
    </AppBar>
  );
}

export default Navbar;
