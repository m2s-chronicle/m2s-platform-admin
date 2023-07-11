//* React Import
import React from 'react';

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
import { MEMBER_COLUMNS, MEMEBER_STATUS } from '@/utils/staticData';
import masking from '@/utils/masking';

//* Types import
import { TMember } from '@/types';
import { ThemeColorType } from '@/layouts/types';

//* Components
import TablePagination from '@/components/table/TablePagination';
import useMemberList from '@/hooks/queries/useMemberList';

interface StatusObjType {
  [key: string]: {
    color: ThemeColorType;
  };
}
interface IProps {
  rows: TMember[];
}

const ListTable = (props: IProps) => {
  const router = useRouter();
  const { rows } = props;

  const statusObj: StatusObjType = {
    pending: { color: 'warning' },
    out: { color: 'secondary' },
    active: { color: 'success' },
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { isLoading, data } = useMemberList();
  console.log(isLoading);

  if (isLoading) return <div>Loading...</div>;
  console.log(data?.data);

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
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{rows.length - index}</TableCell>
                <TableCell>
                  {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
                  {/* <Avatar sx={{ width: 30, height: 30, marginRight: 2 }} /> */}
                  {masking.name(row.name)}
                  {/* </Box> */}
                </TableCell>
                <TableCell>{masking.email(row.userId)}</TableCell>
                <TableCell>{masking.phone(row.phone)}</TableCell>
                <TableCell>{row.birth}</TableCell>
                <TableCell>{row.createDt}</TableCell>
                <TableCell>{row.lastDt}</TableCell>

                <TableCell>
                  <Chip
                    label={MEMEBER_STATUS.filter((stat) => stat.value === row.status)[0].label}
                    color={statusObj[row.status].color}
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
                    <IconButton size="small" sx={{ p: 0 }} onClick={() => router.push(`/member/list/${row.idx}`)}>
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
        page={10}
        count={10}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        isRowSelect
      />
    </>
  );
};

export default ListTable;
