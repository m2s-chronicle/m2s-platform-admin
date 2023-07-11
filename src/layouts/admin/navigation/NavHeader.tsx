// Next Import
import Link from 'next/link';
// MUI Import
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
// SVG Import
import LogoSymbol from '../../../../public/static/svg/logo-symbol.svg';
// Config Import
import themeConfig from '@/configs/themeConfig';

const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
}));

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
}));

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const NavHeader = () => {
  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: 6 }}>
      <StyledLink href="/dashboard">
        <LogoSymbol />
        <HeaderTitle variant="h6" sx={{ ml: 3 }}>
          {themeConfig.templateName} ADMIN
        </HeaderTitle>
      </StyledLink>
    </MenuHeaderWrapper>
  );
};

export default NavHeader;
