/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, CardMedia } from '@material-ui/core';

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
  const classes = useStyles();
  if(!productData.media) {handleClose(); return null};
  console.log('productData', productData.media);
  return (
    <div>
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
            <p id="transition-modal-description" dangerouslySetInnerHTML={{__html: productData.description}} />
            <img
              url={productData.media.source}
              alt={productData.name}
              style={{width:'50px'}}
              />
          {(productData.variant_groups[0].options).map((option)=>(
            <button key={option.id} onClick={()=>{console.log(option.id)}}>{option.name}</button>
          ))}
          
        </div>
        </Fade>
      </Modal>
    </div>
  );
}
