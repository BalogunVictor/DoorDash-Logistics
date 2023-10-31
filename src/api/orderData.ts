import axios from 'axios';
import { IOrder } from 'src/models/order';

export const requestOrder = async () => {
  const response = await axios.get<IOrder>('https://dummyjson.com/carts');
  return response.data;
};
