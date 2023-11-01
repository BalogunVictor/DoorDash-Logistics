import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { requestUser } from 'src/api/userData';

import Table from '../table';

import { COLUMNS } from './column';

const Users = () => {
  const { isLoading, error, data: users } = useQuery('userData', requestUser);

  const data = useMemo(() => (!users ? [] : [...users?.users]), [users]);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <>
      <Table columns={columns} data={data} title={'Users'} />
    </>
  );
};

export default Users;
