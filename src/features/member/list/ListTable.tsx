//* React Import
import React, { ReactNode } from 'react';

//* Next Import
import { useRouter } from 'next/router';

//* MUI Import
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Tooltip from '@mui/material/Tooltip';

//* Utils Import
import { MEMBER_COLUMNS, MEMEBER_STATUS, USER_STATUS_COLOR } from '@/utils/staticData';
import masking from '@/utils/masking';
import formatter from '@/utils/formatter';

//* Types import
import { TMember, TPage } from '@/types';
import { ThemeColorType } from '@/layouts/types';

//* Components
import TablePagination from '@/components/table/TablePagination';
import { Divider, SelectChangeEvent } from '@mui/material';

interface StatusObjType {
  [key: string]: {
    color: ThemeColorType;
  };
}
interface IProps {
  rows: TMember[];
  pageInfo: TPage;
  isLoading: boolean;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: SelectChangeEvent<number>, child: ReactNode) => void;
}

const memberKeys = {
  all: ['members'] as const,
  lists: () => [...memberKeys.all, 'list'] as const,
  list: () => [...memberKeys.lists()] as const,
  details: () => [...memberKeys.all, 'detail'],
  detail: (id: number) => [...memberKeys.details(), id] as const,
};

const ListTable = (props: IProps) => {
  const router = useRouter();
  const { rows, pageInfo, isLoading, handleChangePage, handleChangeRowsPerPage } = props;

  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  if (isLoading || !rows) return <Divider sx={{ m: 1 }}>Loading...</Divider>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              {MEMBER_COLUMNS.map((col) => (
                <TableCell key={`mem_${col.value}`}>{col.label}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{rows.length - index}</TableCell>
                <TableCell>
                  {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
                  {/* <Avatar sx={{ width: 30, height: 30, marginRight: 2 }} /> */}
                  {masking.name(row.name) || '-'}
                  {/* </Box> */}
                </TableCell>
                <TableCell>{masking.email(row.email)}</TableCell>
                <TableCell>{masking.phone(row.phone)}</TableCell>
                <TableCell>{formatter.date(row.birth)}</TableCell>
                <TableCell>{formatter.isoToDate(row.created_date)}</TableCell>
                <TableCell>{formatter.isoToDate(row.recent_date)}</TableCell>

                <TableCell>
                  <Chip
                    label={MEMEBER_STATUS.filter((stat) => stat.value === row.status)[0].label}
                    color={USER_STATUS_COLOR[row.status].color as 'default' | 'warning' | 'secondary' | 'success' | 'primary' | 'error' | 'info'}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 },
                    }}
                  />
                </TableCell>

                <TableCell>
                  <Tooltip title="상세보기" placement="top" arrow>
                    <IconButton size="small" sx={{ p: 0 }} onClick={() => router.push(`/member/list/${row.id}`)}>
                      <EditNoteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {/**
       * page: current page
       * count: total page
       * onChange: change page Event
       */}
      <TablePagination
        page={pageInfo.request_page}
        count={pageInfo.total_pages}
        rowsPerPage={pageInfo.request_size}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        isRowSelect
      />
    </>
  );
};

export default ListTable;
