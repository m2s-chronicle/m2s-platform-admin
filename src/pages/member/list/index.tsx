import React, { useState } from 'react';

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

//* Hooks
import useMemberList from '@/hooks/queries/useMemberList';

const ListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { isLoading, data } = useMemberList(currentPage, rowsPerPage);
  console.log("data", data)

  // 페이지 변경
  const handleChangePage = async (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };

  // 페이지당 행 변경
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

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
            <Typography variant="body2">전체 회원수: {data?.page.total_data_cnt}</Typography>
            <Button color="success" size="small" variant="outlined" startIcon={<FileDownloadIcon />}>
              Excel
            </Button>
          </Box>
          <ListTable
            rows={data?.user_list}
            pageInfo={data?.page}
            isLoading={isLoading}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ListPage;
