import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { gsap, Power3 } from 'gsap';
import {
  Typography, Grid, Button,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CartItem from './CartItem/CartItem';
import useStyle from './style';

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
        style={{ minHeight: '80vh', maxWidth: '90vw' }}
      >
        <div style={{ textAlign: 'center' }}>
          <AddShoppingCartIcon style={{ fontSize: '10rem' }} />
          <h2>
            YOUR CART IS EMPTY
          </h2>
          <h6>
            Once you add something to your bag - it will appear here. Ready to get started?
          </h6>
          <Link to="/products" style={{ textDecoration: 'none', paddingTop: '2rem' }}>
            <Button size="large" variant="contained" color="primary">
              Start adding some!
            </Button>
          </Link>
        </div>
      </Grid>
    </>
  );

  const FilledCart = () => {
    // animation
    useEffect(() => {
      cart.line_items.map((_, index) => (
        gsap.timeline().from(`.product${index}`, { y: -30, opacity: 0, duration: 0.8, delay: (0.2 * index), ease: Power3.easeOut }, 'Start')
      ));
    }, []);
    return (
      <>
        <Grid container spacing={3} justify="center" style={{ alignItems: 'center', minHeight: '60vh' }}>
          {cart.line_items.map((item, index) => (
            <Grid container item xs={12} sm={10} key={item.id} alignItems="center" className={`product${index}`}>
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
  };
  if (!cart.line_items) return 'Loading...';
  return (
    <>
      <Grid
        container
        justify="center"
        style={{ backgroundColor: '#fafafa' }}
      >
        <Typography className={classes.topSpace} variant="h4" gutterBottom>
          SHOPPING CART
        </Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Grid>
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
