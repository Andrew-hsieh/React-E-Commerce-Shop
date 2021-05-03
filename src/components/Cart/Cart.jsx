import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Typography, Grid, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyle from './style';
import CartItem from './CartItem/CartItem';

const Cart = ({
  cart, handleEmpty, handleUpdateCartQty, handleRemoveFromCart,
}) => {
  const classes = useStyle();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/">
        start adding some!
      </Link>

    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              item={item}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal:
          {cart.subtotal.formatted_with_symbol}
        </Typography>
        <Button className={classes.emptyButton} onClick={handleEmpty} size="large" type="button" variant="contained" color="secondary">
          Empty Cart
        </Button>
        <Button className={classes.checkoutButton} component={Link} to="./checkout" size="large" type="button" variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </>
  );
  if (!cart.line_items) return 'Loading...';
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

Cart.propTypes = {
  cart: PropTypes.instanceOf(Object).isRequired,
  handleEmpty: PropTypes.func.isRequired,
  handleUpdateCartQty: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
