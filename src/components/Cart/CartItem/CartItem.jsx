import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardMedia, CardContent, CardActions, Typography, Button,
} from '@material-ui/core';
import useStyle from './style';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  const classes = useStyle();
  return (
    <Card>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => { onRemoveFromCart(item.id); }}>Remove</Button>
      </CardActions>
    </Card>
  );
};
CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  onUpdateCartQty: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
