//* MUI Import
import React, { ReactNode } from 'react';
import MuiBox, { BoxProps } from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, Theme } from '@mui/material/styles';


interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage?: number;
  isRowSelect: boolean;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
  onRowsPerPageChange: (event: SelectChangeEvent<number>, child: ReactNode) => void;
}

const PaginationWrapper = styled(MuiBox)<BoxProps>(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  minWidth: '3rem',
}));

const RowSelectWrapper = styled(MuiBox)<BoxProps>(({ theme }) => ({
  position: 'absolute',
  right: 0,
  paddingRight: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
}));

const TablePagination = (props: TablePaginationActionsProps) => {
  const { count, page, rowsPerPage, isRowSelect, onPageChange, onRowsPerPageChange } = props;

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <PaginationWrapper>
      <Pagination
        count={count}
        page={page}
        shape="rounded"
        color="primary"
        onChange={(event: React.ChangeEvent<unknown>, newPage: number) => onPageChange(event as React.MouseEvent<HTMLButtonElement>, newPage)}
      />
      {hidden && isRowSelect && (
        <RowSelectWrapper>
          <Select
            variant="standard"
            size="small"
            defaultValue={rowsPerPage}
            onChange={(event: SelectChangeEvent<number>) => onRowsPerPageChange(event, event.target.value)}
            sx={{ fontSize: 14 }}
            autoWidth
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
          <Typography sx={{ pl: 2 }} variant="body2">
            개씩 보기
          </Typography>
        </RowSelectWrapper>
      )}
    </PaginationWrapper>
  );
};

export default TablePagination;
