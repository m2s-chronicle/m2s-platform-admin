//* MUI Icons Import
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

//* Type Import
import { NavItemsType } from '@/layouts/types';

const navigation = (): NavItemsType => {
  return [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { title: 'Dashboard', icon: SpaceDashboardOutlinedIcon },
      children: [
        {
          path: '/dashboard/member',
          name: 'userStats',
          meta: { title: '회원통계', icon: PanoramaFishEyeIcon },
        },
        {
          path: '/dashboard/service',
          name: 'serviceStats',
          meta: { title: '서비스통계', icon: PanoramaFishEyeIcon },
        },
        {
          path: '/dashboard/usage',
          name: 'usageStats',
          meta: { title: '사용통계', icon: PanoramaFishEyeIcon },
        },
        {
          path: '/dashboard/cms',
          name: 'regionStats',
          meta: { title: '지역별통계', icon: PanoramaFishEyeIcon },
        },
      ],
    },
    {
      sectionTitle: 'User Interface',
    },
    {
      path: '/member',
      name: 'member',
      meta: { title: '회원관리', icon: FolderSharedOutlinedIcon },
      children: [
        {
          path: '/member/list',
          name: 'memList',
          meta: { title: '회원리스트', icon: PanoramaFishEyeIcon },
        },
        {
          path: '/member/list/[_id]',
          name: 'memDetail',
          hidden: true,
          meta: { title: '회원 상세조회', icon: PanoramaFishEyeIcon },
        },
        {
          path: '/member/mydata',
          name: 'memMai',
          meta: { title: '마이데이터', icon: PanoramaFishEyeIcon },
        },
      ],
    },
    {
      sectionTitle: 'Admin Interface',
    },
    {
      path: '/management',
      name: 'admin',
      meta: { title: '관리자관리', icon: AdminPanelSettingsOutlinedIcon },
      children: [
        {
          path: '/management/list',
          name: 'adminList',
          meta: { title: '관리자 리스트', icon: PanoramaFishEyeIcon },
        },
        {
          path: '/management/log',
          name: 'adminLog',
          meta: { title: '관리자활동내역', icon: PanoramaFishEyeIcon },
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      meta: { title: '설정', icon: SettingsOutlinedIcon },
    },
  ];
};

export default navigation;
