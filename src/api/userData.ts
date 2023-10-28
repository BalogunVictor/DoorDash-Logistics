import axios from 'axios';
import { IUsers } from 'src/models/user';

export const requestUser = async () => {
  const response = await axios.get<IUsers>('https://dummyjson.com/users');
  return response.data;
};
