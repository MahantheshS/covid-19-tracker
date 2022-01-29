import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl  } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const availableCountries = async () => {
         setCountries(await fetchCountries());
    }
    availableCountries();
  }, [setCountries]);

    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue = "" onChange = {(e)=> handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, idx) => <option key ={idx} value = {country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    )
}

export default CountryPicker;