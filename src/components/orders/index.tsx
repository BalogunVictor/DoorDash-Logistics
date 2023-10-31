import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { requestOrder } from 'src/api/orderData';

import Table from '../table';

import { COLUMNS } from './column';

const User = () => {
  const { isLoading, error, data: orders } = useQuery('userData', requestOrder);

  const data = useMemo(() => (!orders ? [] : [...orders.carts]), [orders]);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default User;
