/* eslint-disable */
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

function FormInput({ name, label }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        name={name}
        control={control}
        error={isError}
        render={() => (
          <TextField
            fullWidth
            label={label}
            required
          />
        )}
      />
    </Grid>
  );
}

// FormInput.prototype = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
// };

export default FormInput;
