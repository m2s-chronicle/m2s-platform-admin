import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

//* Types import
import { TUser } from '@/types/detail';

//* Utils Import
import { MEMBER_COLUMNS, MEMEBER_STATUS, AUTH_STATUS, USER_STATUS_COLOR, AUTH_STATUS_COLOR } from '@/utils/staticData';
import formatter from '@/utils/formatter';

interface IProps {
  user: TUser[];
}

const MemberProfile = (props: IProps) => {
  const { user } = props;

  return (
    <Box className="member-info" sx={{ textAlign: 'center' }}>
      <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }} />

      {/* Display user information */}
      <Typography variant="subtitle1">{user.name}</Typography>
      {user.age && <Typography variant="body2">만 {user.age}세</Typography>}
      {user.status && (
        <Chip
          label={MEMEBER_STATUS.filter((stat) => stat.value === user.status)[0].label}
          color={USER_STATUS_COLOR[user.status].color}
          sx={{
            mt: 2,
            height: 24,
            fontSize: '0.75rem',
            textTransform: 'capitalize',
            '& .MuiChip-label': { fontWeight: 500 },
            marginRight: '5px',
          }}
        />
      )}
      <br></br>
      {user.auth_status && (
        <Chip
          label={AUTH_STATUS.filter((stat) => stat.value === user.auth_status)[0].label}
          color={AUTH_STATUS_COLOR[user.auth_status].color}
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
