/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@material-ui/core';

// import PropTypes from 'prop-types';
import Product from './Product/Product';
import useStyles from './style';

// const products = [
//   {
//     id: 1, name: 'Nike Zion 1', description: 'Basketball shoes', price: '$250', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3c712e7f-261b-431e-a11f-3ee271e62275/zion-1-basketball-shoe-kfrCDf.png',
//   },
//   {
//     id: 2, name: 'Macbook', description: 'Apple macbook air 2021', price: '$1499', image: 'https://www.yormarket.com/wp-content/uploads/2019/07/Screen_Shot_2018_10_30_at_9.21.19_AM.png',
//   },
// ];

const Products = ({ productList, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {productList.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

// Products.prototype = {
//   productList: PropTypes.instanceOf(Array),
// };

export default Products;
