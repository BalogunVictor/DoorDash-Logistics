import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { requestOrder } from 'src/api/orderData';

import Table from '../table';

import { COLUMNS } from './column';

const OrdersTable = () => {
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery('orderData', requestOrder);

  const data = useMemo(() => (!orders ? [] : [...orders?.carts]), [orders]);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <>
      <Table columns={columns} data={data} title={'Orders'} />
    </>
  );
};

export default OrdersTable;
