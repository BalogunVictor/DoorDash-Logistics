import { createColumnHelper } from '@tanstack/react-table';
import { capitalizeFirstLetter, truncateString } from 'src/helpers';
import { User } from 'src/models/user';

const columnHelper = createColumnHelper<User>();

export const COLUMNS = [
  columnHelper.accessor('id', {
    header: 'S/N',
  }),
  columnHelper.accessor('firstName', {
    header: 'First Name',
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => truncateString(capitalizeFirstLetter(info.getValue()), 12),
    header: 'Last Name',
  }),
  columnHelper.accessor('maidenName', {
    header: 'Maiden Name',
  }),
];
