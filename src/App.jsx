/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import commerce from './lib/commerce';
import {
  Products, Navbar, Cart, Checkout,
} from './components';
import './styles/styles.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const cartAdd = await commerce.cart.add(productId, quantity);
    setCart(cartAdd.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const cartUpdate = await commerce.cart.update(productId, { quantity });
    setCart(cartUpdate.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const cartRemove = await commerce.cart.remove(productId);
    setCart(cartRemove.cart);
  };

  const handleEmpty = async () => {
    const cartEmpty = await commerce.cart.empty();
    setCart(cartEmpty.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    
    setCart(newCart);
  }

  // const handleCaptureCheckout = (checkoutTokenId, newOrder) => {
    
  //     console.log('XXXXXXXXXXXXXX',checkoutTokenId, newOrder)
      
  // };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      console.log('check incomingOrder:', incomingOrder)
      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage('incomingOrder',error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products productList={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmpty={handleEmpty}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout 
            cart={cart}
            order={order}
            handleCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
             />
          </Route>

        </Switch>
      </div>
    </Router>
  );
};

export default App;
