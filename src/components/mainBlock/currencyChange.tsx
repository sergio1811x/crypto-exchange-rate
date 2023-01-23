import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import currencyName from '../assets/currencyName.json';
import React from 'react';

interface currencyChangeProps {
  currency: string;
  setCurrency: (el: string) => void;
}

export const CurrencyChangeBlock = ({ currency, setCurrency }: currencyChangeProps) => {
  return (
    <>
      <FormControl sx={{ ml: 5, minWidth: 200 }}>
        <InputLabel>Валюта</InputLabel>
        <Select value={currency}>
          {currencyName.map((el) => (
            <MenuItem key={el.code} value={el.code} onClick={() => setCurrency(el.code)}>
              <span>{el.code} </span>
              <span style={{ marginLeft: 5 }}>
                {el.name}
                <img
                  style={{ width: 17, marginLeft: 6 }}
                  src={require(`../assets/images/${el.code}.png`)}
                />
              </span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
