// React Import
import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';
// MUI Import
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
// Icons Import
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const menuItemStyles = {
  py: 2,
  px: 4,
  width: '100',
  display: 'flex',
  alignItems: 'center',
  color: 'text.primary',
  textDecoration: 'none',
  '& svg': {
    fontSize: '1.375rem',
    color: 'text.secondary',
  },
};

const AdminDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleDropdownOpen = (e: SyntheticEvent) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDropdownClose = (url?: string) => {
    if (url) router.push(url);
    setAnchorEl(null);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Badge
        overlap="circular"
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar alt="Admin Name" onClick={handleDropdownOpen} sx={{ width: 40, height: 40 }} />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap="circular"
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar
                alt="Admin Name"
                // src="/images/avatars/1.png"
                sx={{ width: '2.5rem', height: '2.5rem' }}
              />
            </Badge>
            <Box
              sx={{
                display: 'flex',
                marginLeft: 3,
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>Admin Name</Typography>
              <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                슈퍼 관리자
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={menuItemStyles}>
            <AssignmentIndOutlinedIcon sx={{ marginRight: 2 }} />
            Profile
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/admin/settings')}>
          <Box sx={menuItemStyles}>
            <SettingsOutlinedIcon sx={{ marginRight: 2 }} />
            Settings
          </Box>
        </MenuItem>
        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem
          sx={{ py: 2 }}
          onClick={() => {
            setAnchorEl(null);
            setIsOpen(true);
          }}
        >
          <ExitToAppOutlinedIcon
            sx={{
              marginRight: 2,
              fontSize: '1.375rem',
              color: 'text.secondary',
            }}
          />
          Logout
        </MenuItem>
      </Menu>

      <Dialog open={isOpen} onClose={handleDialogClose} fullWidth maxWidth="xs">
        <DialogTitle>로그아웃</DialogTitle>
        <DialogContent>
          <DialogContentText>정말 로그아웃하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            아니오
          </Button>
          <Button onClick={() => handleDropdownClose('/auth/login')} color="primary" variant="contained">
            예
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminDropdown;
