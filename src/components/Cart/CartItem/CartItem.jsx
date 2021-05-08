import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, CardMedia, CardContent, CardActions, Typography, Button,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import useStyle from './style';
import './style.css';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <Close fontSize="small" type="button" className={classes.btn} color="secondary" onClick={() => { onRemoveFromCart(item.id); }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '50%', display: 'flex', alignItems: 'center' }}>
          <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
        </div>
        <Container className={classes.content}>
          <CardContent className={classes.cardContent}>
            <span>{item.name}</span>
            <Typography
              variant="h5"
              color="secondary"
            >
              {item.price.formatted_with_symbol}
            </Typography>
            <Typography
              variant="body2"
            >
              {`${item.selected_options[0].group_name}: ${item.selected_options[0].option_name}`}
            </Typography>
          </CardContent>
        </Container>
      </div>
      <CardActions className={classes.cartActions}>
        {/* <Typography>Qty: </Typography> */}
        <div className={classes.buttons} id="qty">
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
    </Card>
  );
};
CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  onUpdateCartQty: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
