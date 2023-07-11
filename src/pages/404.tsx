//* React Import
import { ReactElement } from 'react';

//* Types Import
import { NextPageWithLayout } from './_app';

//* Layout Import
import BlankLayout from '@/layouts/blank/BlankLayout';

//* MUI Import
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

// * Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));

const Error404: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    //TODO: Custom 404 Not Found Page Erro404
    <Box className="content-center">
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant="h1">404</Typography>
          <Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Page Not Found ⚠️
          </Typography>
          <Typography variant="body2">We couldn&prime;t find the page you are looking for.</Typography>
        </BoxWrapper>
        <BoxWrapper sx={{ pt: 10 }}>
          <Button variant="contained" sx={{ px: 5.5 }} onClick={() => router.back()}>
            Go Back
          </Button>
        </BoxWrapper>
      </Box>
    </Box>
  );
};

Error404.getLayout = (page: ReactElement) => <BlankLayout>{page}</BlankLayout>;

export default Error404;
