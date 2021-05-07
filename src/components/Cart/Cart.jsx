import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyle from './style';
import CartItem from './CartItem/CartItem';

const Cart = ({
  cart, handleEmpty, handleUpdateCartQty, handleRemoveFromCart,
}) => {
  const classes = useStyle();

  const EmptyCart = () => (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: '50vh', maxWidth: '90vw' }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2>
            YOUR CART IS EMPTY
          </h2>
          <p>
            Once you add something to your bag - it will appear here. Ready to get started?
          </p>
          <Link to="/" style={{ textDecoration: 'none', paddingTop: '2rem' }}>
            <Button variant="contained" color="primary">
              Start adding some!
            </Button>
          </Link>
        </div>
      </Grid>
    </>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3} justify="center" style={{ alignItems: 'center', minHeight: '60vh' }}>
        {cart.line_items.map((item) => (
          <Grid container item xs={12} sm={10} key={item.id} alignItems="center">
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
        <div className={classes.btnContainer}>
          <Button className={classes.emptyButton} onClick={handleEmpty} type="button" variant="outlined" color="secondary">
            Empty Cart
          </Button>
          <Button className={classes.checkoutButton} component={Link} to="./checkout" size="medium" type="button" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return 'Loading...';
  return (
    <>
      <Grid
        container
        justify="center"
      >
        <Typography className={classes.topSpace} variant="h4" gutterBottom>
          SHOPPING CART
        </Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Grid>
      { console.log(cart)}
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.instanceOf(Object).isRequired,
  handleEmpty: PropTypes.func.isRequired,
  handleUpdateCartQty: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
