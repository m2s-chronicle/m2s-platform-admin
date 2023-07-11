import { ReactNode, createContext, useState } from 'react';

import { ThemeColorType, ContentWidthType } from '../../layouts/types';

import { PaletteMode } from '@mui/material';

import themeConfig from '@/configs/themeConfig';

export type SettingsType = {
  mode: PaletteMode;
  themeColor: ThemeColorType;
  contentWidth: ContentWidthType;
};

export type SettingsContextValueType = {
  settings: SettingsType;
  saveSettings: (updatedSettings: SettingsType) => void;
};

const initialSettings: SettingsType = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth,
};

export const SettingsContext = createContext<SettingsContextValueType>({
  saveSettings: () => null,
  settings: initialSettings,
});

//* settings about Theme
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // state
  const [settings, setSettings] = useState<SettingsType>({
    ...initialSettings,
  });

  const saveSettings = (updatedSettings: SettingsType) => {
    setSettings(updatedSettings);
  };

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>;
};

export const SettingsConsumer = SettingsContext.Consumer;
