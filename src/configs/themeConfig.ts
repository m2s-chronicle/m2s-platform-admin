import { ContentWidthType } from '@/layouts/types';
import { PaletteMode } from '@mui/material';

export type ThemeConfigType = {
  mode: PaletteMode;
  templateName: string;
  navigationSize: number;
  contentWidth: ContentWidthType;
  responsiveFontSizes: boolean;
  menuTextTruncate: boolean;
  routingLoader: boolean;
};

const themeConfig: ThemeConfigType = {
  templateName: 'MAI',
  mode: 'light', //Options: 'light' | 'dark'
  contentWidth: 'boxed',
  responsiveFontSizes: true,
  navigationSize: 260,
  menuTextTruncate: true /* true | false */,
  routingLoader: true,
};

export default themeConfig;
