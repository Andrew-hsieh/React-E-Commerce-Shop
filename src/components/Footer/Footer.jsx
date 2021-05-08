/* eslint-disable */
import React from 'react';
import { Container, Toolbar, Box, Typography, Grid, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import './style.css';

const Footer = () => {
  const newOne = 12;
  return (
    <Box>
      <Container maxWidth="xl">
        <Box mb={{'xs':1,'sm':2}} className='footer_logo'>
          <Link href='/' className='footer_logo_link'>
            {`ANDREW\'S SHOP`}
          </Link>
        </Box>
          <Grid 
           container
           spacing={0} 
           justify="space-around"
           alignItems='flex-start'
           style={{marginBottom:'20px'}}
           >
              <Grid item xs={4} sm={4} justify="center" spacing={0}>
                <ul>
                  <li>
                      <Link href="/" color="inherit">PRIVACY POLICY</Link>
                  </li>
                  <li>
                      <Link href="/" color="inherit">TERMS & CONDITIONS</Link>
                  </li>
                  <li>
                      <Link href="/" color="inherit">ABOUT</Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={4} sm={4} justify='center'>
                <ul className='icon_group'>
                <li>
                <GitHubIcon />
                </li>
                <li>
                <LinkedInIcon />
                </li>
                <li>
                <PhoneIphoneIcon />
                </li>
                </ul>
              </Grid>
              <Grid item xs={4} sm={4} alignItems='flex-start'>
              <ul>
                  <li>
                      <Link href="/" color="inherit">SHIPPING INFO</Link>
                  </li>
                  <li>
                      <Link href="/" color="inherit">RETURNS / EXCHANGES</Link>
                  </li>
                  <li>
                      <Link href="/" color="inherit">CONTACT</Link>
                  </li>
                  </ul>
              </Grid>
          </Grid>
        <Toolbar>
          <Grid container justify='center'>
          <p>
          © {new Date().getFullYear()}
          </p>
          </Grid>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;
