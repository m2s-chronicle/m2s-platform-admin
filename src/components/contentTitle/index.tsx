import React from 'react';

//* MUI Import
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//* Components
import BreadcrumbsLink from '../breadcrumbsLink';

interface ContentTitleProps {
  isBreadcrumbs?: boolean;
  title: string;
}

const ContentTitle = (props: ContentTitleProps) => {
  const { title, isBreadcrumbs } = props;
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5">{title}</Typography>
      {isBreadcrumbs && <BreadcrumbsLink />}
    </Box>
  );
};

export default React.memo(ContentTitle);
