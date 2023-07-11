import ApexChartWrapper from '@/@core/styles/libs/reactApexcharts';

import TestApexchart from '@/features/dashboard/testApexchart';
import { Grid } from '@mui/material';

const DashboardPage = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <TestApexchart />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default DashboardPage;
