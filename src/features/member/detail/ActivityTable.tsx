import React from 'react';

import { IMemberActiveData, ITableColumn } from '@/types';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TablePagination from '@/components/table/TablePagination';

const columns: readonly ITableColumn[] = [
  { id: 'id', label: 'No.', minWidth: 60 },
  { id: 'activeType', label: '활동 유형', minWidth: 120 },
  { id: 'activeDesc', label: '활동 내용', minWidth: 300 },
  { id: 'principal', label: '활동 주체', minWidth: 100 },
  { id: 'regDt', label: '일시' },
];

//TODO: Delete
const getFakeData = (): IMemberActiveData[] => {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    const row = {
      id: `${10 - i}`,
      regDt: '2023-06-06 17:32:32',
      activeType: 'login',
      activeDesc: ` 내용 어쩌고 저쩌고 긴글긴글긴글 긴글긴글활동 ${i}`,
      principal: `활동주체 어쩌고 ${i}`,
    };
    rows.push(row);
  }
  return rows;
};

const fakeRows: IMemberActiveData[] = getFakeData();

const ActivityTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id} style={{ minWidth: col.minWidth }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {fakeRows.map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  {columns.map((col) => {
                    const value = row[col.id];
                    return (
                      <TableCell key={col.id} align={col.align}>
                        {col.format && typeof value === 'number' ? col.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination page={1} count={10} onPageChange={() => ({})} onRowsPerPageChange={() => ({})} isRowSelect />
    </>
  );
};

export default ActivityTable;
