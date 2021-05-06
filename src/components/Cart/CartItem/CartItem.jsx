import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, CardMedia, CardContent, CardActions, Typography, Button,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import useStyle from './style';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  console.log(item);
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <Close fontSize="small" type="button" className={classes.btn} color="secondary" onClick={() => { onRemoveFromCart(item.id); }} />
      <div style={{ maxWidth: '50%', display: 'flex', alignItems: 'center' }}>
        <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      </div>
      <Container className={classes.content}>
        <CardContent className={classes.cardContent}>
          <span>{item.name}</span>
          <Typography variant="h5" color="secondary">{item.price.formatted_with_symbol}</Typography>
          <Typography variant="p">{item.price.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <Typography>Qty: </Typography>
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
        </CardActions>
      </Container>
    </Card>
  );
};
CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  onUpdateCartQty: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
