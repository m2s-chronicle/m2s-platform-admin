import { Theme } from '@mui/material/styles';

import { hexToRGBA } from '@/utils/filters';

const Backdrop = (theme: Theme) => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(${theme.palette.customColors.main}, 0.7)`
              : hexToRGBA(theme.palette.background.default, 0.7),
        },
        invisible: {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

export default Backdrop;
