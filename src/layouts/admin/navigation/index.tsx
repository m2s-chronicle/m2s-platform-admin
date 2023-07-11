// React Import
import { useRef, useState } from 'react';
// MUI Import
import List from '@mui/material/List';
import Box, { BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
// Types Import
import { NavItemsType } from '@/layouts/types';
// Components Import
import NavDrawer from './NavDrawer';
import NavItems from './NavItems';
import NavHeader from './NavHeader';
// Utils
import { hexToRGBA } from '@/utils/filters';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface IProps {
  hidden: boolean;
  navWidth: number;
  navVisible: boolean;
  navRoutes: NavItemsType;
  toggleNavVisibility: () => void;
  setNavVisible: (value: boolean) => void;
}

const StyledBoxForShadow = styled(Box)<BoxProps>({
  top: 50,
  left: -8,
  zIndex: 2,
  height: 75,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '&.d-block': {
    display: 'block',
  },
});

const Navigation = (props: IProps) => {
  const { navRoutes, hidden, toggleNavVisibility, navVisible } = props;
  const shadowRef = useRef(null);
  const theme = useTheme();

  //** State
  const [groupActive, setGroupActive] = useState<string[]>([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);

  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect;

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect();

        return { ...original, height: Math.floor(original.height) };
      };
    }
  };
  const scrollMenu = (container: any) => {
    container = hidden ? container.target : container;
    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('d-block')) {
        // @ts-ignore
        shadowRef.current.classList.add('d-block');
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('d-block');
    }
  };

  const ScrollWrapper = hidden ? Box : PerfectScrollbar;

  return (
    <>
      <NavDrawer {...props}>
        <NavHeader />
        <StyledBoxForShadow
          ref={shadowRef}
          sx={{
            background: `linear-gradient(${theme.palette.background.default} 40%,${hexToRGBA(
              theme.palette.background.default,
              0.1
            )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`,
          }}
        />
        <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
          {/* @ts-ignore */}
          <ScrollWrapper
            {...(hidden
              ? {
                  onScroll: (container: any) => scrollMenu(container),
                  sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' },
                }
              : {
                  options: { wheelPropagation: false },
                  onScrollY: (container: any) => scrollMenu(container),
                  containerRef: (ref: any) => handleInfiniteScroll(ref),
                })}
          >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <List className="nav-items" sx={{ transition: 'padding .25s ease', pr: 4.5 }}>
                <NavItems
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  navRoutes={navRoutes}
                  navVisible={navVisible}
                  toggleNavVisibility={toggleNavVisibility}
                />
              </List>
            </Box>
          </ScrollWrapper>
        </Box>
      </NavDrawer>
    </>
  );
};

export default Navigation;