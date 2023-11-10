/* eslint-disable @typescript-eslint/no-explicit-any */

import { default as fetch } from "node-fetch";

export const getBitcoinPrice = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const price = data.bpi.USD.rate_float;
  return price;
};
