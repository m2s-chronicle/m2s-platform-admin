// Type Import
import { NavLinkType, NavSectionTitleType, NavItemsType } from '@/layouts/types';
// Components Import
import NavSectionTitle from './NavSectionTitle';
import NavLink from './NavLink';
import NavCollapseLink from './NavCollapseLink';

interface IProps {
  navVisible?: boolean;
  toggleNavVisibility?: () => void;
  groupActive: string[];
  currentActiveGroup: string[];
  navRoutes?: NavItemsType;
  setCurrentActiveGroup: (value: string[]) => void;
  setGroupActive: (value: string[]) => void;
}

const resolveNavItemComponent = (item: NavLinkType | NavSectionTitleType) => {
  if ((item as NavSectionTitleType).sectionTitle) return NavSectionTitle;
  if ((item as NavLinkType).children) return NavCollapseLink;

  return NavLink;
};

const NavItems = (props: IProps) => {
  const { navRoutes } = props;

  const RenderMenuItems = navRoutes?.map((item: NavLinkType | NavSectionTitleType, index: number) => {
    const TagName: any = resolveNavItemComponent(item);

    return <TagName {...props} key={index} item={item} />;
  });
  return <>{RenderMenuItems}</>;
};

export default NavItems;
