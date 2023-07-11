import { deepmerge } from '@mui/utils';
import { Roboto } from 'next/font/google';

import palette from './palette';
import spacing from './spacing';
import breakpoints from './breakpoints';
import shadows from './shadows';

import { ThemeOptions } from '@mui/material';
import { SettingsType } from '../context/settingsContext';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const themeOptions = (settings: SettingsType): ThemeOptions => {
  const { mode, themeColor } = settings;
  const themeConfig = {
    palette: palette(mode, themeColor),
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    shape: {
      borderRadius: 8,
    },
    shadows: shadows(mode),
    ...spacing,
    breakpoints: breakpoints(),
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette[themeColor],
      },
    },
  });
};

export default themeOptions;
