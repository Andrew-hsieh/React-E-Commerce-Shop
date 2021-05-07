/* eslint-disable */
import React from 'react';
import { Modal, Backdrop, Fade, Button, makeStyles } from '@material-ui/core';
import Swal from 'sweetalert2';
import Close from '@material-ui/icons/Close';
import './style.css';

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
    // padding: theme.spacing(2, 4, 3),
    width: '80vw',
    height: '80vh',
  },
  close: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor:'pointer',
  }
}));

export default function TransitionsModal({ open, handleClose, productData, onAddToCart }) {
  const [sizeId, setSizeId] = React.useState(null);
  const classes = useStyles();
  const handleChange = (event, newId, variantId) => {
    ([...event.target.parentElement.children].forEach((el)=>el.classList.remove('selectedBtn')))
    event.target.classList.toggle('selectedBtn')
    setSizeId({[variantId]: newId});
  };

  const handleAddToCart = () => {
    if(!sizeId) {
      Swal.fire('Oops...', 'You forgot to choose the size for your new shoes', 'error');
      return;
    };
    onAddToCart(productData.id, 1, sizeId);
    handleClose();
  }

  if(!productData.media) {handleClose(); return null};
  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
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
          className={classes.close} 
          onClick={() =>handleClose()} />
            <h2 id="transition-modal-title">{productData.name}</h2>
            <p id="transition-modal-description"
            style={{ padding:'0 10px'}}
            dangerouslySetInnerHTML={{__html: productData.description}} />
            <div>
            <img
              src={productData.media.source}
              alt={productData.name}
              style={{maxHeight:'40vh', maxWidth:'40vw'}}
              />
              </div>
          <div className={"btnGroup"}>
            { productData.variant_groups.length !== 0 &&(productData.variant_groups[0].options).map((option)=>(
              <button  
              key={option.id}
              className='btn'
              value={option.id}
              aria-label="variant_option"
              onClick={(e)=>handleChange(e,option.id, productData.variant_groups[0].id)}
              >
              {option.name}
              </button>
            ))
            }
          </div>
          <Button 
          size="medium" type="button" variant="contained" color="primary"
          style={{marginTop: '8px'}}
          onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
        </Fade>
      </Modal>
  );
}
