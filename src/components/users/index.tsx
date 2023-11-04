import { useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { MutatingDots } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { requestUser } from 'src/api/userData';

import Table from '../table';

import { COLUMNS } from './column';

const Users = () => {
  const { isLoading, isError, data: users } = useQuery('userData', requestUser);

  const data = useMemo(() => (!users ? [] : [...users?.users]), [users]);
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
        {users && <Table columns={columns} data={data} title={'Users'} />}
        {isError && toast.error('An error occurred')}
      </div>
    </>
  );
};

export default Users;
