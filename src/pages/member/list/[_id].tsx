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
import LoginTable from '@/features/member/detail/LoginTable';
import MydataTable from '@/features/member/detail/MydataTable';
import MemberProfile from '@/features/member/detail/MemberProfile';
import MemberInfo from '@/features/member/detail/MemberInfo';

//* Hooks
import useMemberDetail from '@/hooks/queries/useMemberDetail';

const MemberDetailPage = () => {
  const router = useRouter();
  //get ID
  const id = router.query._id;
  const { isLoading, data } = !isNaN(id) ? useMemberDetail(Number(id)) : { isLoading: false, data: null };
  // console.log("data", data)

  return (
    <>
      {/* Page title */}
      <ContentTitle title="회원 상세조회" isBreadcrumbs />

      {/* Main content */}
      <Grid container spacing={3}>
        {/* Member Info */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader title="회원정보" />
            <CardContent>
              {/* Check if data is available */}
              {isLoading ? (
                <div>Loading...</div>
              ) : data && data.user ? ( // Check if data and data.user exist
                <MemberProfile user={data.user} />
              ) : (
                <div>No user data available.</div>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Activities */}
        <Grid item xs={12} md={9}>
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: 5 }}>
              {isLoading ? (
                <div>Loading...</div>
              ) : data && data.user ? ( // Check if data and data.user exist
                <MemberInfo userData={data.user} />
              ) : (
                <div>No login records available.</div>
              )}
            </CardContent>
          </Card>
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ px: 4, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom>
                  마이데이터 기록
                  <Typography variant="body2"> 총 {data?.mydata.length}개</Typography>
                </Typography>
                <Button color="success" size="small" variant="outlined" startIcon={<FileDownloadIcon />}>
                  Excel
                </Button>
              </Box>
              {isLoading ? (
                <div>Loading...</div>
              ) : data && data.mydata ? ( // Check if data and data.user exist
                <MydataTable mydataData={data.mydata} />
              ) : (
                <div>No login records available.</div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ px: 4, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom>
                  로그인 기록
                  <Typography variant="body2"> 총 {data?.login.length}개</Typography>
                </Typography>
                <Button color="success" size="small" variant="outlined" startIcon={<FileDownloadIcon />}>
                  Excel
                </Button>
              </Box>
              {isLoading ? (
                <div>Loading...</div>
              ) : data && data.login ? ( // Check if data and data.user exist
                <LoginTable loginData={data.login} />
              ) : (
                <div>No login records available.</div>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MemberDetailPage;
