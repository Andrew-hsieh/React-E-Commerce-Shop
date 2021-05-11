/* eslint-disable */
import React, { useEffect } from 'react';
import { TimelineLite, Power3} from 'gsap';
import { Box,Grid, CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css'
import jordan from '../../assets/products/jordan_2.png';
import jordan2 from '../../assets/products/jordan-m.png';
import jordanLogo from '../../assets/products/jordanLogo.png';

const Home = () => {
  let tl = new TimelineLite();

  useEffect(() => {
    tl.from('.logo_container',{y:-30,opacity:0, duration:1, ease:Power3.easeOut},'Start')
    .from('.textContent_title',{x:30,opacity:0, duration:1, ease:Power3.easeOut, delay:0.3},'Start')
    .from('p',{x:30,opacity:0, duration:1, ease:Power3.easeOut, delay:0.5},'Start')
    .from('.go_button',{x:30, opacity:0,duration:1, ease:Power3.easeOut, delay:0.7},'Start')
  }, []);

  return (
    <Grid>
    <CssBaseline />
    <section className='section2'>
      <Grid className='productTheme' item xs={12} sm={8}>
        <Box className='mainImg'>
          <div className='mainImg_container'>
          <img src={jordan} alt='jordan'/>
          <img className='secondImage' src={jordan2} alt='jordan'/>
          </div>
          <Box className='logo_container'>
            <Box className='jordanContainer'>
              <img src={jordanLogo} alt='jordan'/>
            </Box>
              <h6>Air Jordan</h6>
          </Box>
        </Box>
        <Box className='textContent_jordan'>
          <div className='textContent_title'>MA2</div>
          <div className='textContent_title'>Still Loading</div>
          <p>
            Lace up your journey in the Jordan MA2 'Still Loading,
            <br />
            full-grain leather and textiles that balance new and classic.</p>
            <Link to='/products'>
              <button className='go_button'>
                GET
              </button>
            </Link>
        </Box>
      </Grid>
    </section>
    </Grid>
  );
};

export default Home;
