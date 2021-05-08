import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardMedia, CardContent, CardActions, Typography, IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './style';

function Product({ product, onAddToCart }) {
  // console.log('product', product);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent style={{ padding: '8px 10px 0 10px' }}>
          <div className={classes.cardContent}>
            <div>
              <div>
                {product.name}
              </div>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {product.categories[0] ? product.categories[0].name : null}
              </Typography>
            </div>
            <Typography variant="h5" gutterBottom>
              {/* {(product.price.formatted_with_symbol).substring(0, 4)} */}
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" /> */}
        </CardContent>
      </div>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton area-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Product;
