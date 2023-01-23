import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { CoinApi } from './types';

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/coins/' }),
  endpoints: (builder) => ({
    getPriceCoin: builder.query<CoinApi[], string | unknown>({
      query: ({ currency }) => `markets?vs_currency=${currency}&per_page=10`,
    }),
  }),
});

export const { useGetPriceCoinQuery } = coinApi;
