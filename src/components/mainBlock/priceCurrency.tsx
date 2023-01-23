import { FormControl, TextField } from '@mui/material';
import React from 'react';

interface priceCurrencyProps {
  currencyCount: number;
  setCurrencyCount: (e: any) => void;
}

export const PriceCurrencyBlock = ({ currencyCount, setCurrencyCount }: priceCurrencyProps) => {
  return (
    <>
      <FormControl sx={{ ml: 5, minWidth: 200, alignItems: 'center' }}>
        <TextField
          sx={{ input: { textAlign: 'center', fontSize: 18 } }}
          value={currencyCount}
          onChange={(e) => setCurrencyCount(e.target.value)}
        />
      </FormControl>
    </>
  );
};
