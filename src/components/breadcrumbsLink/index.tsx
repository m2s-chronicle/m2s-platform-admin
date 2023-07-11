//* Next Import
import { memo } from 'react';
import { useRouter } from 'next/router';

//* MUI Import
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

//* Utils Import
import navigation from '@/utils/navigation';

//* Types Import
import { NavLinkType, NavSectionTitleType } from '@/layouts/types';

const navList: NavLinkType[] = [];

navigation().map((item: NavLinkType | NavSectionTitleType) => {
  if ((item as NavLinkType).path) navList.push(item);
  if ((item as NavSectionTitleType).sectionTitle) return;
});

const getTitle = (currentPath: string, navList: NavLinkType[]): any => {
  for (const item of navList) {
    if (item.path === currentPath) return item.meta?.title;
    if (item.children) {
      const foundTitle = getTitle(currentPath, item.children);
      if (foundTitle) return foundTitle;
    }
  }
};

const BreadcrumbsLink = () => {
  const router = useRouter();

  const getBreadcrumb = () => {
    // only show naviation with meta.title
    const asPathWithoutQuery = router.pathname.split('?')[0];
    const asPathNestedRoutes = asPathWithoutQuery.split('/').filter((v) => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      const title = getTitle(href, navList);
      const isDisabled = idx === asPathNestedRoutes.length - 1 || idx === 0;
      return { href, title, isDisabled };
    });

    return [...crumblist];
  };

  return (
    <div>
      <MuiBreadcrumbs aria-label="breadcrumb">
        {/* <Link underline="hover" color="inherit" href="/dashboard">
          Home
        </Link> */}
        {getBreadcrumb().map((obj) =>
          obj.isDisabled ? (
            <Typography key={obj.href}>{obj.title}</Typography>
          ) : (
            <Link key={obj.href} underline="hover" color="inherit" href={obj.href}>
              {obj.title}
            </Link>
          )
        )}
      </MuiBreadcrumbs>
    </div>
  );
};

export default memo(BreadcrumbsLink);
