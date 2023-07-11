//* React Import
import { ReactNode, useState } from 'react';

//* MUI Import
import { styled, Theme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

//* Component Import
import Navigation from './navigation';
import LayoutAppBar from './appBar';
import Footer from './footer';
import ScrollToTop from '@/components/scrollToTop';

//* ETC
import themeConfig from '@/configs/themeConfig';
import navigation from '@/utils/navigation';

//* Store
import { useAppSelector } from '@/store';

const LayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  trainsition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const { contentWidth } = useAppSelector((state) => state.theme.settings);
  // state
  const [navVisible, setNavVisible] = useState<boolean>(false);

  const navWidth = themeConfig.navigationSize;

  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <>
      <LayoutWrapper>
        <Navigation
          hidden={hidden}
          navWidth={navWidth}
          navVisible={navVisible}
          navRoutes={navigation()}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
        />
        <MainContentWrapper className="layout-wrapper">
          <LayoutAppBar hidden={hidden} navVisible={navVisible} toggleNavVisibility={toggleNavVisibility} />
          {/* //Here is main */}
          <ContentWrapper
            className="layout-content-wrapper"
            sx={{
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' },
              }),
            }}
          >
            {children}
          </ContentWrapper>

          <Footer />
        </MainContentWrapper>
      </LayoutWrapper>

      {/* Scroll to top button */}
      <ScrollToTop className="mui-fixed">
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpRoundedIcon />
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default AdminLayout;
