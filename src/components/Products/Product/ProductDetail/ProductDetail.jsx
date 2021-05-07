/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Grid } from '@material-ui/core';
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
    // padding: theme.spacing(2, 4, 3),
    width: '80vw',
    height: '80vh',
  },
}));

export default function TransitionsModal({ open, handleClose, productData }) {
  const [productId, setProductId] = React.useState(null);
  const classes = useStyles();
  
  const handleChange = (event, newId) => {
    ([...event.target.parentElement.children].forEach((el)=>el.classList.remove('selectedBtn')))
    event.target.classList.toggle('selectedBtn')
    setProductId(newId);
  };

  if(!productData) {handleClose(); return null};
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
            <h2 id="transition-modal-title">{productData.name}</h2>
            <p id="transition-modal-description"
            style={{ padding:'0 5px'}}
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
              onClick={(e)=>handleChange(e,option.id)}
              >
              {option.name}
              </button>
            ))
            }
          </div>
        </div>
        </Fade>
      </Modal>
  );
}
