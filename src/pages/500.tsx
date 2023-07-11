import React, { ReactNode } from 'react';
import { NextPageWithLayout } from './_app';

import BlankLayout from '@/layouts/blank/BlankLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Error500: NextPageWithLayout = () => {
  return (
    //TODO: Custom 500 Not Found Page Erro500
    <Box>
      <Typography variant="h1">500</Typography>
      <Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
        Internal server error 👨🏻‍💻
      </Typography>
      <Typography variant="body2">Oops, something went wrong!</Typography>
    </Box>
  );
};

Error500.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error500;
