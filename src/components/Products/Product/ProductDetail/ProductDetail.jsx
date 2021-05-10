/* eslint-disable */
import React from 'react';
import { Modal, Backdrop, Fade, Button, makeStyles, Box } from '@material-ui/core';
import Swal from 'sweetalert2';
import Close from '@material-ui/icons/Close';
import ImageSlider from '../../../ImageSlider/ImageSlider';
import './style.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ccc',
    boxShadow: theme.shadows[5],
    borderRadius: '0.5rem',
    textAlign: 'center',
    position: 'relative',
    width: '80vw',
    height: '80vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
  },
}));

export default function TransitionsModal({ open, handleClose, productData, onAddToCart }) {
  const [sizeId, setSizeId] = React.useState(null);
  const classes = useStyles();

  // toggle selected button class name for change color
  const handleChange = (event, newId, variantId) => {
    ([...event.target.parentElement.children].forEach((el)=>el.classList.remove('selectedBtn')))
    event.target.classList.toggle('selectedBtn')
    setSizeId({[variantId]: newId});
  };

  const handleLeave = () => {
    setSizeId(null);
    handleClose()
  } 
  const handleAddToCart = () => {
    if(!sizeId) {
      Swal.fire('Oops...', 'You forgot to choose the size for your new shoes', 'error');
      return;
    };
    onAddToCart(productData.id, 1, sizeId);
    setSizeId(null);
    handleClose();
  }

  if(!productData.media) {handleClose(); return null};
  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleLeave}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Close 
            fontSize="small" 
            type="button" 
            className='close' 
            onClick={() =>handleLeave()} />
            <div className="textContainer">
              <h2 id="transition-modal-title">{productData.name}</h2>
              <p id="transition-modal-description">
                {productData.price.formatted_with_symbol}</p>
            </div>
            <div className='imageContainer'>
              <ImageSlider assets={productData.assets} />
            </div>
            <Box mb={{'xs':2,'md':4}} className="btnContainer">
              <Box className="btnGroup">
                { productData.variant_groups.length !== 0 &&(productData.variant_groups[0].options).map((option)=>(
                  <button  
                  key={option.id}
                  className='btn'
                  value={option.id}
                  aria-label="variant_option"
                  onClick={(e)=>handleChange(e,option.id, productData.variant_groups[0].id)}>
                  {option.name}
                  </button>))
                }
              </Box>
              <Button 
                size="medium" type="button" variant="contained" color="primary"
                style={{marginTop: '8px'}}
                onClick={handleAddToCart}
                >
                  Add to Cart
              </Button>
            </Box>
        </div>
        </Fade>
      </Modal>
  );
}
