//* Next Import
import { useRouter } from 'next/router';

//* MUI Import
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

//* Components Import
import ContentTitle from '@/components/contentTitle';

//* Fetatures Import
import ActivityTable from '@/features/member/detail/ActivityTable';
import MemberInfo from '@/features/member/detail/MemberInfo';

const MemberDetailPage = () => {
  const router = useRouter();
  //get ID
  const id = router.query._id;
  console.log(id);

  return (
    <>
      <ContentTitle title="회원 상세조회" isBreadcrumbs />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader title="회원정보" />
            <CardContent>
              <MemberInfo />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card sx={{ mb: 3 }}>
            <CardHeader title="기기관리" />
            <CardContent></CardContent>
          </Card>
          <Card>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ px: 4, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body2">총 234개</Typography>
                <Button color="success" size="small" variant="outlined" startIcon={<FileDownloadIcon />}>
                  Excel
                </Button>
              </Box>
              <ActivityTable />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MemberDetailPage;
