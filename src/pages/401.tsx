import React, { ReactNode } from 'react';
import { NextPageWithLayout } from './_app';

import BlankLayout from '@/layouts/blank/BlankLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Error401: NextPageWithLayout = () => {
  //TODO: Custom 401 Not Found Page Erro401
  return (
    <Box>
      <Typography variant="h1">401</Typography>
      <Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
        You are not authorized! 🔐
      </Typography>
      <Typography variant="body2">Oops, something went wrong!</Typography>
    </Box>
  );
};

Error401.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error401;
