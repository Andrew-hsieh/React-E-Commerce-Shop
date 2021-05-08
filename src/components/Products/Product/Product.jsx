/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';

function Product({ product, handleOpen }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div style={{position: 'relative'}}>
        <CardMedia onClick={()=>handleOpen(product)} className={classes.media} id='imageFade' image={product.media.source} title={product.name} data-src={product.assets.length>1?product.assets[1].url:null}  />
        <CardContent className={classes.textContent}>
          <div className={classes.cardContent}>
            <div>
              <Typography variant="subtitle1">
                {product.name}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {product.categories[0] ? product.categories[0].name : null}
              </Typography>
            </div>
            <Typography variant="h5" gutterBottom>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
      </div>
      {/* <CardActions disableSpacing className={classes.cardActions}>
        <IconButton area-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;
