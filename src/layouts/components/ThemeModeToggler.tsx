import { useEffect } from 'react';
// MUI Import
import { useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';

// Icon Import
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { themeActions } from '@/store/slices/themeSlice';

const ThemeModeToggler = () => {
  const dispatch = useDispatch();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const themeMode = useAppSelector((state) => state.theme.settings.mode);

  useEffect(() => {
    if (themeMode === 'light') {
      dispatch(themeActions.modeToggler('light'));
    } else if (themeMode === 'dark') {
      dispatch(themeActions.modeToggler('dark'));
    } else {
      const mediaMode = prefersDarkMode ? 'dark' : 'light';
      dispatch(themeActions.modeToggler(mediaMode));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode]);

  const handleModeToggle = () => {
    if (themeMode === 'light') {
      dispatch(themeActions.modeToggler('dark'));
    } else {
      dispatch(themeActions.modeToggler('light'));
    }
  };

  return (
    <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
      {themeMode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
};

export default ThemeModeToggler;
