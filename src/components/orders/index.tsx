import { useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { MutatingDots } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { requestOrder } from 'src/api/orderData';

import Table from '../table';

import { COLUMNS } from './column';

const OrdersTable = () => {
  const {
    isLoading,
    isError,
    data: orders,
  } = useQuery('orderData', requestOrder);

  const data = useMemo(() => (!orders ? [] : [...orders?.carts]), [orders]);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <>
      <div className="relative h-full">
        <div className="absolute inset-0 flex h-full items-center justify-center">
          {isLoading && (
            <MutatingDots
              ariaLabel="mutating-dots-loading"
              color="black"
              height="100"
              radius="12.5"
              secondaryColor="black"
              visible={true}
              width="100"
              wrapperClass=""
              wrapperStyle={{}}
            />
          )}
        </div>
        {isError && <Table columns={columns} data={data} title={'Orders'} />}
        {isError && toast.error('An error occurred')}
      </div>
    </>
  );
};

export default OrdersTable;
