import { ComponentType, ReactNode } from 'react';
import { SettingsType } from '@/@core/context/settingsContext';

export type ContentWidthType = 'full' | 'boxed';

export type NavLinkType = {
  path?: string;
  name?: string;
  meta?: { title?: string; icon?: string | string[] | ReactNode | ComponentType };
  children?: NavLinkType[];
  action?: string;
  subject?: string;
  disabled?: boolean;
  hidden?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
};

export type NavSectionTitleType = {
  sectionTitle: string;
  action?: string;
  subject?: string;
};

export type NavItemsType = (NavLinkType | NavSectionTitleType)[];

export type LayoutPropsType = {
  hidden: boolean;
  settings: SettingsType;
  children: ReactNode;
  navItems?: NavItemsType;
  scrollToTop?: (props?: any) => ReactNode;
  saveSettings: (values: SettingsType) => void;
  footerContent?: (props?: any) => ReactNode;
};

export type ThemeColorType = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export type BlankLayoutPropsType = {
  children: ReactNode;
};
