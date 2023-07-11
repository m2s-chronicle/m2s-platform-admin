// ** MUI Imports
import { hexToRGBA } from '@/utils/filters';
import { Theme } from '@mui/material/styles';

const Chip = (theme: Theme) => {
  return {
    MuiChip: {
      styleOverrides: {
        outlined: {
          '&.MuiChip-colorDefault': {
            borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`,
          },
        },
        filled: {
          '&.MuiChip-colorWarning': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.12),
            color: theme.palette.warning.main,
          },
          '&.MuiChip-colorSecondary': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
            color: theme.palette.secondary.main,
          },
          '&.MuiChip-colorSuccess': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.12),
            color: theme.palette.success.main,
          },
        },
        deleteIcon: {
          width: 18,
          height: 18,
        },
      },
    },
  };
};

export default Chip;
