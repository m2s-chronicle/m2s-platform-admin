// Mui Import
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiListSubHeader, { ListSubheaderProps } from '@mui/material/ListSubheader';

// Types Import
import { NavSectionTitleType } from '@/layouts/types';

const ListSubHeader = styled((props: ListSubheaderProps) => <MuiListSubHeader component="li" {...props} />)(
  ({ theme }) => ({
    lineHeight: 1,
    display: 'flex',
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2),
    backgroundColor: 'transparent',
    transition: 'padding-left .25s ease-in-out',
  })
);

const TypographyHeaderText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  letterSpacing: '0.21px',
  textTransform: 'uppercase',
  color: theme.palette.text.disabled,
  fontWeight: theme.typography.fontWeightMedium,
}));

const NavSectionTitle = ({ item }: { item: NavSectionTitleType }) => {
  return (
    <ListSubHeader>
      <Divider
        textAlign="left"
        sx={{
          m: 0,
          width: '100%',
          lineHeight: 'normal',
          textTransform: 'uppercase',
          '&:before, &:after': { top: 7, trasform: 'none' },
          '& .MuiDivider-wrapper': { px: 2.5, fontSize: '0.75rem', letterSpacing: '0.21px' },
        }}
      >
        <TypographyHeaderText noWrap>{item?.sectionTitle}</TypographyHeaderText>
      </Divider>
    </ListSubHeader>
  );
};

export default NavSectionTitle;
