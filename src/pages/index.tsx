import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';
import BlankLayout from '@/layouts/blank/BlankLayout';

const RootPage: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    //TODO: access token여부로 page redirect 처리추가
    router.push('/auth/login');
  }, [router]);

  return <div />;
};

RootPage.getLayout = (page: ReactElement) => <BlankLayout>{page}</BlankLayout>;

export default RootPage;
