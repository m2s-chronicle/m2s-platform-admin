//* MUI Import
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

//* Components Import
import ThemeModeToggler from '@/layouts/components/ThemeModeToggler';
import AdminDropdown from '@/layouts/components/AdminDropdown';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationDropdown from '@/layouts/components/NotificationDropdown';

//* Store
import { useAppSelector } from '@/store';
import { useScrollTrigger } from '@mui/material';

//* Utils
import { hexToRGBA } from '@/utils/filters';

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out',
}));

interface IProps {
  hidden?: boolean;
  window?: () => Window;
  navVisible?: boolean;
  toggleNavVisibility: () => void;
}

const LayoutAppBar = (props: IProps) => {
  const { hidden, toggleNavVisibility, window } = props;
  const { contentWidth } = useAppSelector((state) => state.theme.settings);

  const theme = useTheme();

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 2, target: window ? window() : undefined });

  return (
    <AppBar elevation={0} color="default" position="sticky">
      <Toolbar
        sx={{
          ...(trigger && {
            backgroundColor: hexToRGBA(theme.palette.background.paper, 0.8),
            px: `${theme.spacing(5)} !important`,
            boxShadow: theme.shadows[3],
            backdropFilter: 'blur(8px)',
          }),
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` },
          }),
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Toolbar left */}
          <Box className="action-left" sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            {hidden && (
              <IconButton aria-label="menu" sx={{ mr: 1 }} onClick={toggleNavVisibility}>
                <MenuOutlinedIcon />
              </IconButton>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>03:24:52</Typography>
              <IconButton arial-label="refresh">
                <CachedOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          {/* Toolbar right */}
          <Box className="action-right" sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeModeToggler />
            <NotificationDropdown />
            <AdminDropdown />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LayoutAppBar;
