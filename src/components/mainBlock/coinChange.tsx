import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface coinChangeProps {
  data: any;
  coinName: string;
  setCoinName: (el: string) => void;
}

export const CoinChangeBlock = ({ data, coinName, setCoinName }: coinChangeProps) => {
  return (
    <>
      <FormControl sx={{ ml: 5, minWidth: 200 }}>
        <InputLabel>Койн</InputLabel>
        <Select value={coinName}>
          {data?.map((el: any) => (
            <MenuItem
              sx={{ justifyContent: 'center' }}
              key={el.name}
              value={el.name}
              onClick={() => setCoinName(el.name)}
            >
              <span>
                {el.name}
                <img style={{ marginLeft: 8, width: 18 }} src={el.image} alt={'image'} />{' '}
              </span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
