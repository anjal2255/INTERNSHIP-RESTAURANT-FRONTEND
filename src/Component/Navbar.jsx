import React, { useState } from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Bg from './Bg/pic.jpg';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { DensityMediumSharp } from '@mui/icons-material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HomeIcon from '@mui/icons-material/Home';
import { green, orange } from '@mui/material/colors';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const backgroundImageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <div>
      <img
        src={Bg}
        alt="background"
        style={backgroundImageStyle}
      />
      <AppBar color='' position="static">
        <Toolbar>
          <img
            src="https://dynamic.brandcrowd.com/asset/logo/6cc0fdef-3fe7-4d1d-900d-e7f884b7bb8d/logo-search-grid-1x?logoTemplateVersion=1&v=637936305229930000&text=RED+STILLETTO&colorpalette=grayscale"
            alt=""
            width={150}
            height={130}
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant='h5'>RED STILLETTO RESTAURANT</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>

          {/* <Button>
              <Link to={'/Menubar'} style={{ textDecoration: 'none', color: 'black' }}>MENU</Link>
            </Button>&nbsp;&nbsp;&nbsp; */}
            {/* <Button>
              <Link to={''} style={{ textDecoration: 'none', color: 'black' }}>OFFERS</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
             {/* <Button color='error'>
              <Link to={'/Homepage'} style={{ textDecoration: 'none', color: 'black' }}>HOME</Link>
            </Button>&nbsp;&nbsp;&nbsp; */}
            <IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={'/Home'} style={{textDecoration:'none',color:"warning"}}>
                <HomeIcon sx={{fontSize:40,color:'#b71c1c'}}/>
              </Link>
            </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Button>
              <Link to={'/AdminDashboard'} style={{ textDecoration: 'none', color: 'black' }}>AdminDasboard</Link>
            </Button> */}
            {/* <Button>
              <Link to={'/Signup'} style={{ textDecoration: 'none', color: 'black' }}>SIGNUP</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              aria-controls={open ? 'restaurant-dashboard-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              startIcon={<DensityMediumIcon/>}
            >
              
            </Button>
            <Menu
              id="restaurant-dashboard-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'restaurant-dashboard-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to={'/Menubar'}>Menu</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={'/Offers'}>Offers</Link></MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={'/Feedback'}>Feedback</Link>
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>
                <Link to={'/AdminPanel'}>AdminDasboard</Link>
              </MenuItem> */}
              <MenuItem onClick={handleClose}>
                <Link to={'/Homepage'}>Logout</Link>
              </MenuItem>
{/*               
              <MenuItem onClick={handleClose}>Settings</MenuItem> */}
            </Menu>
            
          </div><Menu
              id="restaurant-dashboard-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'restaurant-dashboard-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to={'/Menubar'}>Menu</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={'/Offers'}>Offers</Link></MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={'/Feedback'}>Feedback</Link>
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>
                <Link to={'/AdminPanel'}>AdminDasboard</Link>
              </MenuItem> */}
              <MenuItem onClick={handleClose}>
                <Link to={'/Homepage'}>Logout</Link>
              </MenuItem>
              
              {/* <MenuItem onClick={handleClose}>Settings</MenuItem> */}
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;