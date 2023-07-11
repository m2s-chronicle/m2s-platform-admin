//* React Import
import { ElementType } from 'react';
import Link from 'next/link';

//* Next Import
import { useRouter } from 'next/router';

//* Mui Import
import ListItem from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

//* Types Import
import { SettingsType } from '@/@core/context/settingsContext';
import { NavLinkType } from '@/layouts/types';

//* Components
import LinkIcon from '../../components/LinkIcon';

//* utils
import { handleURLQueries } from '@/utils/filters';
import themeConfig from '@/configs/themeConfig';

interface IProps {
  key?: number;
  item: NavLinkType;
  settings?: SettingsType;
  navVisible?: boolean;
  toggleNavVisibility: () => void;
}

const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`,
  },
}));

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' }),
});

const NavLink = (props: IProps) => {
  const { item, toggleNavVisibility, navVisible } = props;
  const router = useRouter();
  const IconTag = item.meta?.icon;

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      {!item.hidden && (
        <ListItem
          disablePadding
          className="nav-link"
          disabled={item.disabled || false}
          sx={{
            mt: 1.4,
            px: '0 !important',
          }}
        >
          <Link href={item?.path ?? ''} style={{ width: '100%', textDecoration: 'none' }}>
            <MenuNavLink
              className={isNavLinkActive() ? 'active' : ''}
              {...(item.openInNewTab ? { target: '_blank' } : null)}
              onClick={(e) => {
                if (item.path === undefined) {
                  e.preventDefault();
                  e.stopPropagation();
                }
                if (navVisible) {
                  toggleNavVisibility();
                }
              }}
              sx={{
                pl: 5.5,
                ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
              }}
            >
              <ListItemIcon
                sx={{
                  mr: 2.5,
                  color: 'text.primary',
                  transition: 'margin .25s ease-in-out',
                }}
              >
                <LinkIcon icon={IconTag} />
              </ListItemIcon>

              <MenuItemTextMetaWrapper>
                <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>{item.meta?.title}</Typography>
              </MenuItemTextMetaWrapper>
            </MenuNavLink>
          </Link>
        </ListItem>
      )}
    </>
  );
};

export default NavLink;
