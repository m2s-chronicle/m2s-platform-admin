import React, { useState } from 'react';
import { useRouter } from 'next/router';

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

import useMemberList from '@/hooks/queries/useMemberList';

const ListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { isLoading, data } = useMemberList(currentPage);

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
          <ListTable rows={data?.user_list} pageInfo={data?.page} />
        </CardContent>
      </Card>
    </>
  );
};

export default ListPage;
