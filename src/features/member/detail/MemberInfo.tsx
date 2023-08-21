import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

//* Types import
import { TUser } from '@/types/detail';

//* Utils Import
import { MEMBER_COLUMNS, MEMEBER_STATUS, AUTH_STATUS } from '@/utils/staticData';
import formatter from '@/utils/formatter';


interface IProps {
  user: TUser[];
}

const MemberInfo = ( props: IProps ) => {
  const { user } = props;
  const userStatusObj = {
    pending: { color: 'warning' },
    out: { color: 'secondary' },
    active: { color: 'success' },
  };
  const authStatusObj = {
    finish: { color: 'success' },
  };

  
  return (
    <Box className="member-info" sx={{ textAlign: 'center' }}>
      <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }} />

      {/* Display user information */}
      <Typography variant="subtitle1">{user.name}</Typography>
      <Typography variant="body2">{user.email}</Typography>
      <Typography variant="body2">{user.username}</Typography>
      {/* Add more user details here */}

      {/* Check if additional details exist */}
      {user.created_date && <Typography variant="body2">{formatter.isoToDateTime(user.created_date)}</Typography>}
      {user.status && (
        <Chip
          label={MEMEBER_STATUS.filter((stat) => stat.value === user.status)[0].label}
          color={userStatusObj[user.status].color}
          sx={{
            height: 24,
            fontSize: '0.75rem',
            textTransform: 'capitalize',
            '& .MuiChip-label': { fontWeight: 500 },
            marginRight: '5px'
          }}
        />
      )}
      {user.auth_status && (
        <Chip
          label={AUTH_STATUS.filter((stat) => stat.value === user.auth_status)[0].label}
          color={authStatusObj[user.auth_status].color}
          sx={{
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

export default MemberInfo;
