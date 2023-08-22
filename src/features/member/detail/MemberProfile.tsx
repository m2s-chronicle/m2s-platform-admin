import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

//* Types import
import { TUser } from '@/types/detail';

//* Utils Import
import { MEMEBER_STATUS, AUTH_STATUS, USER_STATUS_COLOR, AUTH_STATUS_COLOR } from '@/utils/staticData';

interface IProps {
  userData: TUser;
}

const MemberProfile = (props: IProps) => {
  const { userData } = props;

  return (
    <Box className="member-info" sx={{ textAlign: 'center' }}>
      <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }} />

      {/* Display user information */}
      <Typography variant="subtitle1">{userData.name}</Typography>
      {userData.age && <Typography variant="body2">만 {userData.age}세</Typography>}
      {userData.status && (
        <Chip
          label={MEMEBER_STATUS.filter((stat) => stat.value === userData.status)[0].label}
          color={USER_STATUS_COLOR[userData.status].color as 'default' | 'warning' | 'secondary' | 'success' | 'primary' | 'error' | 'info'}
          sx={{
            height: 24,
            fontSize: '0.75rem',
            textTransform: 'capitalize',
            '& .MuiChip-label': { fontWeight: 500 },
            marginRight: '5px',
          }}
        />
      )}
      <br></br>
      {userData.auth_status && (
        <Chip
          label={AUTH_STATUS.filter((stat) => stat.value === userData.auth_status)[0].label}
          color={AUTH_STATUS_COLOR[userData.auth_status].color as 'default'}
          sx={{
            mt: 2,
            height: 24,
            fontSize: '0.75rem',
            textTransform: 'capitalize',
            '& .MuiChip-label': { fontWeight: 500 },
          }}
        />
      )}
      {/* Add more conditionally rendered user details */}
    </Box>
  );
};

export default MemberProfile;
