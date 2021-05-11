/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, IconButton, Typography, Badge,
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
