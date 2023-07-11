//* MUI Import
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

//* Components
import ContentTitle from '@/components/contentTitle';

//* Features
import ListTable from '@/features/member/list/ListTable';
import MemberSearchForm from '@/features/member/list/MemberSearchForm';

const ListPage = () => {
  // const [page, setPage] = useState<number>(0);
  // const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  function createData(
    idx: number,
    name: string,
    userId: string,
    phone: string,
    gender: 'F' | 'M',
    status: 'pending' | 'active' | 'out',
    birth: string,
    createDt: string,
    lastDt: string
  ) {
    return { idx, name, userId, phone, gender, status, birth, createDt, lastDt };
  }

  const rows = [
    createData(
      1,
      '김아무개',
      'gildong@gmail.com',
      '010-1234-4567',
      'M',
      'active',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '손뚱땜',
      'gildong@gmail.com',
      '010-1234-4567',
      'M',
      'pending',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '오세덕',
      'gildong@gmail.com',
      '010-1234-4567',
      'M',
      'pending',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '김다정',
      'cwson123@naver.com',
      '010-1234-4567',
      'M',
      'active',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '박나래',
      'wh12945f@gmail.com',
      '010-1234-4567',
      'M',
      'active',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '코쿤',
      'gildong@gmail.com',
      '010-1234-4567',
      'M',
      'pending',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '김말숙',
      'gildong@gmail.com',
      '010-1234-4567',
      'M',
      'out',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '박미연',
      'gildong@gmail.com',
      '010-1234-4567',
      'M',
      'out',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '세글자',
      'mynameis@gmail.com',
      '010-1234-4567',
      'M',
      'out',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
    createData(
      1,
      '두끼',
      'gildong@gmail.com',
      '010-1234-4567',
      'M',
      'out',
      '2020-01-02',
      '2020-01-01',
      '2022-01-23 15:22'
    ),
  ];

  return (
    <>
      <ContentTitle title="회원리스트" isBreadcrumbs />

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Search Filter" titleTypographyProps={{ variant: 'h6' }} />
        {/* Search */}
        <CardContent sx={{ pt: 0 }}>
          <MemberSearchForm />
        </CardContent>
      </Card>

      <Card>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ px: 4, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body2">전체 회원수: 234</Typography>
            <Button color="success" size="small" variant="outlined" startIcon={<FileDownloadIcon />}>
              Excel
            </Button>
          </Box>
          <ListTable rows={rows} />
        </CardContent>
      </Card>
    </>
  );
};

export default ListPage;
