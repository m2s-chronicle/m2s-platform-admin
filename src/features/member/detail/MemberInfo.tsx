import React from 'react';
import { Paper, Table, TableContainer, TableRow, TableCell, Typography } from '@mui/material';
import formatter from '@/utils/formatter';
import parser from '@/utils/parser';
import Chip from '@mui/material/Chip';
import { MEMEBER_STATUS, AUTH_STATUS, USER_STATUS_COLOR, AUTH_STATUS_COLOR } from '@/utils/staticData';
import masking from '@/utils/masking';

interface IUser {
  username: string;
  email: string;
  created_date: string;
  status: string;
  auth_date: string;
  auth_status: string;
  name: string;
  birth_date: string;
  gender: string;
  national: string;
  mobile_carrier: string;
  mobile_number: string;
  reg_no: string;
  age: number;
  ip_address: string;
  user_agent: string;
}

interface IProps {
  userData: IUser;
}

const cellStyle = {
  fontWeight: 'bold',
  backgroundColor: '#f4f4f4',
};

const UserTable = (props: IProps) => {
  const { userData } = props;
  const parsedUserAgent = parser.parseUserAgent(userData.user_agent);
  const getGenderText = (gender: string) => {
    return gender === '0' ? '여성' : gender === '1' ? '남성' : '-';
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <tbody>
          <TableRow>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">이름</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{userData.name}</Typography>
            </TableCell>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">닉네임</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{userData.username}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">이메일</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{userData.email}</Typography>
            </TableCell>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">회원 가입</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{formatter.isoToFullDateTime(userData.created_date)}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">상태</Typography>
            </TableCell>
            <TableCell>
              <Chip
                label={MEMEBER_STATUS.filter((stat) => stat.value === userData.status)[0].label}
                color={USER_STATUS_COLOR[userData.status].color}
                sx={{
                  height: 24,
                  fontSize: '0.75rem',
                  textTransform: 'capitalize',
                  '& .MuiChip-label': { fontWeight: 500 },
                  marginRight: '5px',
                }}
              />
            </TableCell>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">본인인증</Typography>
            </TableCell>
            <TableCell>
              {userData.auth_status ? (
                <>
                  <Chip
                    label={AUTH_STATUS.filter((stat) => stat.value === userData.auth_status)[0].label}
                    color={AUTH_STATUS_COLOR[userData.auth_status].color}
                    sx={{
                      mb: 2,
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 },
                    }}
                  />
                  <Typography variant="body1">{formatter.isoToFullDateTime(userData.auth_date)}</Typography>
                </>
              ) : (
                '-'
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">성별</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{getGenderText(userData.gender)}</Typography>
            </TableCell>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">국적</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{userData.national}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">휴대폰 번호</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                {masking.phone(userData.mobile_number)} {userData.mobile_carrier && <>({userData.mobile_carrier})</>}
              </Typography>
            </TableCell>
            <TableCell style={cellStyle}>
              <Typography variant="subtitle1">주민등록번호</Typography>
            </TableCell>
            <TableCell>
              {userData.reg_no ? (
                <Typography variant="body1">
                  {userData.reg_no}****** (만 {userData.age}세)
                </Typography>
              ) : (
                '-'
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f4f4f4' }}>
              <Typography variant="subtitle1">최근 접속 정보</Typography>
            </TableCell>
            <TableCell colSpan={3}>
              {parsedUserAgent ? (
                <>
                  <Typography variant="body1">IP : {userData.ip_address}</Typography>
                  <Typography variant="body1">
                    <Typography variant="body1">운영체제: {parsedUserAgent.operatingSystem}</Typography>
                    {parsedUserAgent.webKit && (
                      <Typography variant="body1">브라우저 엔진: {parsedUserAgent.webKit}</Typography>
                    )}
                    {parsedUserAgent.browser && (
                      <Typography variant="body1">브라우저: {parsedUserAgent.browser}</Typography>
                    )}
                  </Typography>
                </>
              ) : (
                <Typography variant="body1">-</Typography>
              )}
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
