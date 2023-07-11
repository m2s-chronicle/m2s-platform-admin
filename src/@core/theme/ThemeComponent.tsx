//* React Import
import { ReactNode } from 'react';

//* MUI Import
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

//* Custom MUI Style
import typography from './typography';
import overrides from './overrides';

//* Settings
import themeOptions from './ThemeOptions';
import themeConfig from '@/configs/themeConfig';

//* Styles
import GlobalStyling from '../styles/globalStyles';

//* Store
import { useAppSelector } from '@/store';

interface IProps {
  children: ReactNode;
}

const ThemeComponent = (props: IProps) => {
  //* Theme Mode
  const { children } = props;
  const settings = useAppSelector((state) => state.theme.settings);

  const coreThemeConfig = themeOptions(settings);

  let theme = createTheme(coreThemeConfig);

  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  });

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
