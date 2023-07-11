// React Import
import { ReactNode } from 'react';
// MUI Components
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';

import { styled, useTheme } from '@mui/material/styles';
interface IProps {
  hidden: boolean;
  navWidth: number;
  navVisible: boolean;
  children: ReactNode;
  toggleNavVisibility: () => void;
  setNavVisible: (value: boolean) => void;
}
const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflow: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none',
  },
  '& .MuiListItem-gutters': {
    paddingInline: 4,
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
  },
});

const NavDrawer = (props: IProps) => {
  const { hidden, children, navVisible, setNavVisible, navWidth } = props;
  const theme = useTheme();

  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true,
    },
  };

  const DesktopDrawerProps = {
    open: true,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
  };

  return (
    <SwipeableDrawer
      className="layout-nav"
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{ sx: { width: navWidth } }}
      sx={{
        width: navWidth,
        '& .MuiDrawer-paper': {
          borderRight: 0,
          // backgroundColor: theme.palette.background.paper,
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default NavDrawer;
