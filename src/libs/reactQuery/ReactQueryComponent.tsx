import { ReactElement, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type reactQueryComponentType = {
  children: ReactElement;
  pageProps: any;
};

const ReactQueryComponent = ({ children, pageProps }: reactQueryComponentType) => {
  // 서로 다른 사용자와 요청 사이에 데이터 공유 막기
  const [queryClient] = useState(
    () =>
      new QueryClient({
        // logger: {
        //   log: console.log,
        //   warn: console.warn,
        //   error: console.error,
        // },

        // 기본설정 옵션
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // window focus시 refetch(default: true)
            // refetchOnMount: false, // mount될때 refetch(default: true)
            // refetchOnReconnect: false, // 재연결시 refetch(default: true)
            retry: 0, // 실패쿼리캡쳐후 UI에 에러 표시하기전 재시도 횟수
            staleTime: 5 * 60 * 1000, // milliseconds(default: 0)
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* Hydrate: SSR 사용을 위해서 */}
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default ReactQueryComponent;
