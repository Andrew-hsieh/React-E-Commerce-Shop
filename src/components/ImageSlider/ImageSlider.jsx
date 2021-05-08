/* eslint-disable */
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia } from '@material-ui/core';

const SimpleSlider = ({ assets }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <Slider {...settings}>
        {assets.map(Image=>{
            return(
            <img src={Image.url} key={Image.id} alt={Image.filename} />
                )
        })}
        </Slider>
  );
};

export default SimpleSlider;
