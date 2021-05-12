/* eslint-disable */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TransitionsModal from './Product/ProductDetail/ProductDetail';
import { gsap, Power3} from 'gsap';
// import PropTypes from 'prop-types';
import Product from './Product/Product';
import useStyles from './style';

const Products = ({ productList, onAddToCart }) => {
  const [open, setOpen] = React.useState(false);
  const [productData, setProductData] = React.useState({});

  const handleOpen = (product) => {
    setProductData(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    productList.map((_,index)=>{
      return (
        gsap.timeline().from(`.product${index}`,{y:-100,opacity:0, duration:0.8,delay:(0.2 * index), ease:Power3.easeOut},'Start')
      )})
  }, []);
 
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {productList.map((product,index) => (
          <Grid className={`product${index}`} item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product handleOpen={handleOpen} product={product} />
          </Grid>
        ))}
      </Grid>
      <TransitionsModal onAddToCart={onAddToCart} productData={productData} open={open} handleClose={handleClose} />
    </main>
  );
};

// Products.prototype = {
//   productList: PropTypes.instanceOf(Array),
// };

export default Products;
