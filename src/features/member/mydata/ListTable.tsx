//* React Import
import React, { ReactNode } from 'react';

//* Next Import
import { useRouter } from 'next/router';

//* MUI Import
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
import { Button, SelectChangeEvent } from '@mui/material';

//* Utils Import
import { MYDATA_COLUMNS, HEALTH_CHECK_STATUS, HEALTH_CHECK_STATUS_COLOR } from '@/utils/staticData';
import masking from '@/utils/masking';
import formatter from '@/utils/formatter';


//* Types import
import { TMydata, TPage } from '@/types';

//* Components
import TablePagination from '@/components/table/TablePagination';


interface IProps {
  rows: TMydata[];
  pageInfo: TPage;
  isLoading: boolean;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: SelectChangeEvent<number>, child: ReactNode) => void;
}

const ListTable = (props: IProps) => {
  const router = useRouter();
  const { rows, pageInfo, isLoading, handleChangePage, handleChangeRowsPerPage } = props;
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  if (isLoading || !rows) return <div>Loading...</div>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              {MYDATA_COLUMNS.map((col) => (
                <TableCell key={`mem_${col.value}`} sx={{ whiteSpace: 'nowrap' }}>{col.label}</TableCell>
              ))}
              <TableCell sx={{ whiteSpace: 'nowrap' }}>상세보기</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{rows.length - index}</TableCell>
                <TableCell>
                <Button
                  variant="text"
                  color="primary"
                  sx={{
                    textTransform: 'none',
                    justifyContent: 'center', // Align content to start of the cell
                    width: '100%', // Make the button fill the cell width
                    backgroundColor: '#f5f5f5',
                    '&:hover': {
                      backgroundColor: '#e0e0e0', // Hover background color
                    },
                  }}
                  onClick={() => router.push(`/member/list/${row.user}`)}
                >
                  {masking.name(row.name)}
                </Button>
              </TableCell>
                <TableCell>{formatter.date(row.birth)} <br></br>(만 {row.age}세)</TableCell>
                <TableCell>{formatter.date(row.checkup_year+row.checkup_date)} <br></br>(만 {row.age_at_checkup}세)</TableCell>
                <TableCell>{row.checkup_place}</TableCell>
                <TableCell>
                  <Chip
                    label={HEALTH_CHECK_STATUS.filter((stat) => stat.value === row.judgement)[0].label}
                    color={HEALTH_CHECK_STATUS_COLOR[row.judgement]?.color as 'default'}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 },
                    }}
                  />
                </TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.weight}</TableCell>
                <TableCell>{row.waist}</TableCell>
                <TableCell>{row.bmi}</TableCell>
                <TableCell>{row.sight}</TableCell>
                <TableCell>{row.hearing}</TableCell>
                <TableCell>{row.blood_pressure}</TableCell>
                <TableCell>{row.urinary_protein}</TableCell>
                <TableCell>{row.hemoglobin}</TableCell>
                <TableCell>{row.fasting_blood_sugar}</TableCell>
                <TableCell>{row.total_cholesterol}</TableCell>
                <TableCell>{row.hdl_cholesterol}</TableCell>
                <TableCell>{row.triglyceride}</TableCell>
                <TableCell>{row.ldl_cholesterol}</TableCell>
                <TableCell>{row.serum_creatinine}</TableCell>
                <TableCell>{row.gfr}</TableCell>
                <TableCell>{row.ast}</TableCell>
                <TableCell>{row.alt}</TableCell>
                <TableCell>{row.ygpt}</TableCell>
                <TableCell>{row.tb_chest_disease}</TableCell>
                <TableCell>{row.osteoporosis}</TableCell>
                <TableCell>{formatter.isoToDate(row.created_date)}</TableCell>
                <TableCell>
                  <Tooltip title="상세보기" placement="top" arrow>
                    <IconButton size="small" sx={{ p: 0 }} onClick={() => router.push(`/member/mydata/${row.id}`)}>
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
