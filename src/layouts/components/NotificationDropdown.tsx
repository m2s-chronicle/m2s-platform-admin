// React Import
import { SyntheticEvent, useState } from 'react';
// MUI import
import IconButton from '@mui/material/IconButton';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
// Icons Import
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const MenuItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  flex: '1 1 100%',
  overflow: 'hidden',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  marginBottom: theme.spacing(0.75),
}));

const MenuItemSubtitle = styled(Typography)<TypographyProps>({
  flex: '1 1 100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const NotificationDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null);
  // const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton color="inherit" aria-haspopup="true" onClick={handleDropdownOpen} aria-controls="customized-menu">
        <NotificationsOutlinedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography sx={{ fontWeight: 600 }}>Notifications</Typography>
            <Chip
              size="small"
              label="1 New"
              color="primary"
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500, borderRadius: '10px' }}
            />
          </Box>
        </MenuItem>
        <MenuItem onClick={handleDropdownClose}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            {/* <Avatar alt="Flora" /> */}
            <Box sx={{ mr: 4, flex: '1 1', display: 'flex', overflow: 'hidden', flexDirection: 'column' }}>
              <MenuItemTitle>Congratulation Flora! 🎉</MenuItemTitle>
              <MenuItemSubtitle variant="body2">Won the monthly best seller badge</MenuItemSubtitle>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Today
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleDropdownClose}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 4, flex: '1 1', display: 'flex', overflow: 'hidden', flexDirection: 'column' }}>
              <MenuItemTitle>New user registered.</MenuItemTitle>
              <MenuItemSubtitle variant="body2">5 hours ago</MenuItemSubtitle>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Yesterday
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default NotificationDropdown;
