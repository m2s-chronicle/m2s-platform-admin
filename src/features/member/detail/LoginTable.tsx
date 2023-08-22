import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import formatter from '@/utils/formatter';
import parser from '@/utils/parser';
import Typography from '@mui/material/Typography';

interface IProps {
  loginData: {
    id: number;
    created_date: string;
    ip_address: string;
    user_agent: string;
    success: string;
    user: number;
  }[];
}

const columns = [
  { id: 'id', label: 'No.', minWidth: 40 },
  { id: 'created_date', label: '일시' },
  { id: 'ip_address', label: 'IP 주소', minWidth: 100 },
  // { id: 'user_agent', label: 'User Agent', minWidth: 200 },
  { id: 'operating_system', label: '운영체제', minWidth: 150 },
  { id: 'browser_engine', label: '브라우저 엔진', minWidth: 150 },  
  { id: 'browser', label: '브라우저', minWidth: 150 },  
  { id: 'success', label: '성공 여부', minWidth: 100 },
];


const LoginTable = (props: IProps) => {
  const { loginData } = props;

  return (
    <>
    <TableContainer sx={{ px: 4 }} component={Paper}>
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
        {loginData.map((row) => {
            const parsedUserAgent = parser.parseUserAgent(row.user_agent);
            return (
              <TableRow hover tabIndex={-1} key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{formatter.isoToDateTime(row.created_date)}</TableCell>
                <TableCell>{row.ip_address}</TableCell>
                <TableCell>{parsedUserAgent.operatingSystem}</TableCell>
                <TableCell>{parsedUserAgent.webKit}</TableCell>
                <TableCell>{parsedUserAgent.browser}</TableCell>
                <TableCell>{row.success}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default LoginTable;
