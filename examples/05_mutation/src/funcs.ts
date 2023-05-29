"use server";
import { getCurrentRequestHeaders } from 'waku/server'

// module state on server
let counter = 0;

export const getCounter = () => counter;

export const increment = () => {
  const headers = getCurrentRequestHeaders();
  console.log('user-agent in action: ', headers?.['user-agent']);
  counter += 1;
};
