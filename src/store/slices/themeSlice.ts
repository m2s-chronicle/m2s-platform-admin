import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import themeConfig from '@/configs/themeConfig';
import { PaletteMode } from '@mui/material';
import { SettingsType } from '@/@core/context/settingsContext';

interface IProps {
  settings: SettingsType;
  showNav: boolean;
  //Todo Add layout state
}
const initialState: IProps = {
  settings: {
    themeColor: 'primary',
    mode: themeConfig.mode,
    contentWidth: themeConfig.contentWidth,
  },
  showNav: true,
  //Todo Add layout state
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    modeToggler: (state, action: PayloadAction<PaletteMode>) => {
      state.settings.mode = action.payload;
    },
    navToggler: (state, action: PayloadAction<boolean>) => {
      state.showNav = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
