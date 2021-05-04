import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import commerce from './lib/commerce';
import {
  Products, Navbar, Cart, Checkout,
} from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
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
            <Checkout cart={cart} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
};

export default App;
