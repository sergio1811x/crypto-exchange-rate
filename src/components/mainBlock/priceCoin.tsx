import { FormControl, TextField } from '@mui/material';
import React from 'react';

interface priceCoinProps {
  coinCount: number;
  currencyCount: number;
  coinSum: number;
  setCoinCount: (e: any) => void;
  currency: string;
}

export const PriceCoinBlock = ({
  coinCount,
  setCoinCount,
  currencyCount,
  coinSum,
  currency,
}: priceCoinProps) => {
  return (
    <>
      <FormControl sx={{ ml: 5, minWidth: 200 }}>
        <TextField
          sx={{ input: { textAlign: 'center', fontSize: 18 } }}
          value={
            currencyCount == 1
              ? coinCount + '  ' + currency
              : (coinSum * currencyCount)?.toFixed(2) + '  ' + currency
          }
          onChange={(e) => setCoinCount(e.target.value)}
        />
      </FormControl>
    </>
  );
};
