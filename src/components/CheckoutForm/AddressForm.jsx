/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  InputLabel, Select, MenuItem, Button, Grid, Typography, Input,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './Checkout/FormInput';

import commerce from '../../lib/commerce';

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisionList, setShippingSubdivisionList] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();

//-----fetch data-----//
  const fetchShippingCountries = async (checkoutTokenId) => {
    //get the countries list from commerce API base on shipping setting
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    // countries will be an object contain country code and name, ex:{CA : "Canada", ...}
    setShippingCountries(countries);
    // set the first country of list as a default option
    setShippingCountry(Object.keys(countries)[0])
  };

  const fetchSubdivisions= async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    
    setShippingSubdivisionList(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0])
  };

  const fetchShippingOptions = async ( checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});
    
    setShippingOptions(options);
    setShippingOption(options[0].id)
  };

//-----useEffect-----//

  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id);
  }
  ,[]);

  useEffect(()=>{
    if(shippingCountry)fetchSubdivisions(shippingCountry);
  }
  ,[shippingCountry]);

  useEffect(()=>{
    if(shippingSubdivision)fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }
  ,[shippingSubdivision]);

//-----map-----//
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id:code, label:name }));
  //this countries will contain an Array with few Objects inside, each Object contain id and label ex:{id: "AU", label: "Australia"}
  
  const subdivisions = Object.entries(shippingSubdivisionList).map(([code, name]) => ({ id:code, label:name }));

  const options = shippingOptions.map((sO)=>
   ({ id: sO.id, label:`${sO.description} - (${sO.price.formatted_with_symbol})`}))
  


  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption}) )}>
          <Grid container spacing={3}>
            <FormInput name='firstName' label="First name" />
            <FormInput name='lastName' label="last name" />
            <FormInput name='address' label="Address" />
            <FormInput name='email' label="Email" />
            <FormInput name='City' label="City" />
            <FormInput name='ZIP' label="ZIP / Postcode" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
              {countries.map((country)=>(
                <MenuItem key={country.id} value={country.id}>
                {country.label}
              </MenuItem>
              ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e)=>setShippingSubdivision(e.target.value)}>
              {subdivisions.map((sub)=>(
                <MenuItem key={sub.id} value={sub.id}>
                {sub.label}
              </MenuItem>
              ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e)=>setShippingOption(e.target.value)}>
              {options.map((option)=>(
                <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
              ))}
              </Select>
            </Grid>
          </Grid>
          <br/>
          <div style={{ display: 'flex', justifyContent:'space-between' }}>
                <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                <Button 
                type='submit' 
                variant="contained" 
                color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

AddressForm.prototype = {
  checkoutToken: PropTypes.instanceOf(Object),
  next: PropTypes.func.isRequired,
};
AddressForm.defaultProps = {
  checkoutToken: null,
};

export default AddressForm;
