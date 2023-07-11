//* Next Import
import Head from 'next/head';
import { Router } from 'next/router';

//* Type import
import { type ReactElement, type ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

//* Loader Import
import NProgress from 'nprogress';

//* Emotion Import
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache';
import { createEmotionCache } from '@/libs/createEmotionCache';

//* Store Import
import { Provider } from 'react-redux';
import store, { persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

//* Locale Import
import '@/libs/dayjs';

//* Layout Import
import AdminLayout from '@/layouts/admin/AdminLayout';
import ThemeComponent from '@/@core/theme/ThemeComponent';

//* Settings Import
import themeConfig from '@/configs/themeConfig';

//* Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css';

//* GlobalStyle Import
import '../../styles/globals.css';
import ReactQueryComponent from '@/libs/reactQuery/ReactQueryComponent';

// getLayout속성 사용할 수 있게 설정
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// 기존 AppProps타입에 Layout Type을 추가
export type ExtendedAppProps = AppProps & {
  Component: NextPageWithLayout; // layout type 추가
  emotionCache?: EmotionCache; // emotion tyoe 추가
};

const clientSideEmotionCache = createEmotionCache();

if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
}

export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: ExtendedAppProps) {
  // 페이지 단위에서 정의한 레이아웃이 있다면 해당 레이아웃을 적용 그렇지 않으면 AdminLayout적용
  const getLayout = Component.getLayout ?? ((page) => <AdminLayout>{page}</AdminLayout>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactQueryComponent pageProps={pageProps}>
          <CacheProvider value={emotionCache}>
            <Head>
              <title>{`${themeConfig.templateName} - Material Design Next Admin Template`}</title>
              <meta name="keywords" content="Material Design, MUI, Admin Template, Next Admin Template" />
              <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeComponent>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
          </CacheProvider>
        </ReactQueryComponent>
      </PersistGate>
    </Provider>
  );
}
