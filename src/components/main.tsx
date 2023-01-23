import React, { useEffect, useRef, useState } from 'react';
import { useGetPriceCoinQuery } from '../redux/coinPriceApi';
import { CurrencyChangeBlock } from './mainBlock/currencyChange';
import { CoinChangeBlock } from './mainBlock/coinChange';
import { PriceCoinBlock } from './mainBlock/priceCoin';
import { PriceCurrencyBlock } from './mainBlock/priceCurrency';

export const Main = () => {
  const [coinName, setCoinName] = useState<string>('Bitcoin');
  const [currency, setCurrency] = useState<string>('USD');
  const [coinCount, setCoinCount] = useState<number>(1);
  const [currencyCount, setCurrencyCount] = useState<number>(1);
  const [coinSum, coinCurrencySum] = useState<number>(1);
  const { data, isFetching } = useGetPriceCoinQuery({ currency });

  useEffect(() => {
    data
      ?.filter((el: { name: string }) => el.name == coinName)
      .map((el: { current_price: any }) => {
        setCoinCount(el.current_price);
        coinCurrencySum(el.current_price);
      });
  }, [isFetching, currency, coinName]);

  useEffect(() => {
    setCoinCount(coinSum * currencyCount);
  }, [currencyCount, setCoinName, setCurrency]);

  return (
    <div className={'main_wrapper'}>
      <h4 style={{ color: '#403434' }}>Crypto</h4>
      <div className={'main_block'}>
        <CoinChangeBlock data={data} coinName={coinName} setCoinName={setCoinName} />
        <CurrencyChangeBlock currency={currency} setCurrency={setCurrency} />
        <PriceCurrencyBlock currencyCount={currencyCount} setCurrencyCount={setCurrencyCount} />
        <PriceCoinBlock
          currency={currency}
          coinCount={coinCount}
          currencyCount={currencyCount}
          setCoinCount={setCoinCount}
          coinSum={coinSum}
        />
      </div>
    </div>
  );
};
