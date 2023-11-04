import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

function Table({ columns, data, title }: any) {
  const [filterInput, setFilterInput] = useState('');

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const handleFilterChange = (e: any) => {
    const value = e.target.value || undefined;
    table.setGlobalFilter(value);
    setFilterInput(value);
  };

  return (
    <div className="bg-gray-100 p-2">
      <h2 className="py-4">{title}</h2>
      <div className="flex h-8 justify-between">
        <div className="flex items-center gap-4">
          <p className="text-gray-700/50">
            {table.getState().pagination.pageIndex + 1}-{table.getPageCount()}{' '}
            of {data.length}
          </p>
          <div className="flex gap-4">
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              <span className="rounded-md bg-white p-1 text-lg font-semibold">
                {'<'}
              </span>
            </button>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              <span className="rounded-md bg-white p-1 text-lg font-semibold">
                {'>'}
              </span>
            </button>
          </div>
        </div>
        <input
          className="border-none focus:border-transparent"
          onChange={handleFilterChange}
          placeholder={' Search'}
          value={filterInput}
        />
      </div>
      <div className="relative overflow-x-auto py-4">
        <table className="w-full table-auto">
          <thead className="text-xs text-gray-700/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="border-gray-300 py-2" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="border-gray-200 py-2 font-medium"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
