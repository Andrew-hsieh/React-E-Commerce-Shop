/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, IconButton, Typography, Badge
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

import logo from '../../assets/logo.png';
import useStyles from './style';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
        <Typography component={Link} to="/" variant="h6" className='title' color="inherit">
          <img src={logo} alt="Commerce.js" height="60px" className={classes.image} />
          {'Andrew\'s Shop'}
        </Typography>
        <Toolbar />
        <div className='title store_title'>
        <Typography component={Link} to="/products" variant="h6" color="inherit">
          Store
        </Typography>
          <div className='store_links'>
          <Typography component={Link} to="/products" variant="body1" className='title store_title' color="inherit">
            New
          </Typography>
          <Typography component={Link} to="/products" variant="body1" className='title store_title' color="inherit">
            Men
          </Typography>
          <Typography component={Link} to="/products" variant="body1" className='title store_title' color="inherit">
            Women
          </Typography>
          </div>
        </div>
        <div className={classes.grow} />
        {location.pathname !== '/cart' && (
        <div className={classes.button}>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
        )}
        </Toolbar>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {
  totalItems: PropTypes.number,
};
Navbar.defaultProps = {
  totalItems: null,
};

export default Navbar;
