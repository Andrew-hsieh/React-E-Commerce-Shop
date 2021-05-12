/* eslint-disable */
import React from 'react';
import { Container, Box, Typography, Grid, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import './style.css';

const Footer = () => {
  const newOne = 12;
  return (
    <Box mt={5} mb={{'xs':2,'sm':8}}>
      <Container maxWidth="xl">
        <Box mb={{'xs':1,'sm':5}} className='footer_logo'>
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
              <Grid item xs={8} sm={4} className='right_link'>
                <ul className='footer_side_link'>
                  <li>
                      <a href="/" color="inherit">PRIVACY POLICY</a>
                  </li>
                  <li>
                      <a href="/" color="inherit">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                      <a href="/" color="inherit">ABOUT</a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={10} sm={4} className='info_container'>
                <Box>
                <ul className='icon_group'>
                <li>
                <a href="https://github.com/Andrew-hsieh/React-E-Commerce-Shop">
                <GitHubIcon className="footer_icon" />
                <span className="footer_icon_bg" />
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/andrew-hsieh-22a802205/">
                <LinkedInIcon className="footer_icon" />
                <span className="footer_icon_bg" />
                </a>
                </li>
                <li>
                <a href="tel:+61478326588"><i className="fas fa-mobile-alt" aria-label="phone-number" />
                  <PhoneIphoneIcon className="footer_icon" />
                  <span className="footer_icon_bg" />
                  </a>
                </li>
                </ul>
                </Box>
                <Box className='footer_newsletter'>
                  <h4 className='footer_newsletter_title'>WEEKLY NEWSLETTER</h4>
                  <form className='form-newsletter'>
                  <input type='email' name='email' placeholder='NAME@EMAIL.COM'></input>
                  <button type='submit' className='footer_btn_subscribe'>SUBSCRIBE</button>
                  </form>
                </Box>
              </Grid>
              <Grid item xs={8} sm={4}>
              <ul className='footer_side_link'>
                  <li>
                      <a href="/" color="inherit">SHIPPING INFO</a>
                  </li>
                  <li>
                      <a href="/" color="inherit">RETURNS / EXCHANGES</a>
                  </li>
                  <li>
                      <a href="/" color="inherit">CONTACT</a>
                  </li>
                  </ul>
              </Grid>
          </Grid>
          <Grid container justify='center'>
          <p>
          © {new Date().getFullYear()}
          </p>
          </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
