//* Mui Import
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

//* Store Import
import { useAppSelector } from '@/store';

const Footer = () => {
  const theme = useTheme();
  const { contentWidth } = useAppSelector((state) => state.theme.settings);

  return (
    <Box
      component="footer"
      className="layout-footer"
      sx={{ zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        className="footer-content-container"
        sx={{
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          ...(contentWidth === 'boxed' && { '@media(min-width: 1440px)': { maxWidth: 1440 } }),
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'end' }}>
          {/* <Box component="span">https://homepage.domain.co.kr</Box> */}
          <Typography variant="caption" sx={{ mr: 2 }}>
            {'COPYRIGHT © 2023 M2S Copyright MAI, All rights reserved'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
