//*  React Import
import { useEffect, useState } from 'react';

//* Next Import
import { useRouter } from 'next/router';

//* MUI Import
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse, { CollapseProps } from '@mui/material/Collapse';
import Box, { BoxProps } from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, useTheme } from '@mui/material/styles';

//* Types import
import { NavLinkType } from '@/layouts/types';
import { ListItem, Typography } from '@mui/material';

//* Components Import
import LinkIcon from '@/layouts/components/LinkIcon';
import NavLink from './NavLink';

//* config
import themeConfig from '@/configs/themeConfig';

interface IProps {
  item: NavLinkType;
  navVisible?: boolean;
  toggleNavVisibility: () => void;
}

const MenuCollapseLink = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
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

const MenuCollapse = styled(Collapse)<CollapseProps>(({ theme }) => ({
  width: '100%',
  paddingLeft: 0,
  '& .MuiSvgIcon-root': {
    paddingLeft: theme.spacing(3),
  },
}));

const NavCollapseLink = (props: IProps) => {
  const { item } = props;

  const router = useRouter();
  const IconTag = item.meta?.icon;
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const path = item.path ?? '';
    if (router.pathname.includes(path)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [router, item.path]);

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{
        mt: 1.4,
        px: '0 !important',
        flexDirection: 'column',
      }}
    >
      <MenuCollapseLink
        onClick={handleToggle}
        selected={isOpen}
        {...(item.openInNewTab ? { target: '_blank' } : null)}
        sx={{
          pl: 5.5,
          ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.hover,
          },
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
          <Typography>{item.meta?.title}</Typography>
          {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </MenuItemTextMetaWrapper>
      </MenuCollapseLink>

      <MenuCollapse component="ul" in={isOpen} timeout="auto" unmountOnExit>
        {item.children?.map((child: NavLinkType, index: number) => (
          <NavLink {...props} key={index} item={child} />
        ))}
      </MenuCollapse>
    </ListItem>
  );
};

export default NavCollapseLink;
