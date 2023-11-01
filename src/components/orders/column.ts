import { createColumnHelper } from '@tanstack/react-table';
import { Order } from 'src/models/order';

const columnHelper = createColumnHelper<Order>();

export const COLUMNS = [
  columnHelper.accessor('id', {
    header: 'S/N',
  }),
  columnHelper.accessor((row) => row.products[0]?.title, {
    header: 'Product Title',
  }),
  columnHelper.accessor('total', {
    header: 'Total',
  }),
  columnHelper.accessor('totalQuantity', {
    header: 'Total Quantity',
  }),
];
