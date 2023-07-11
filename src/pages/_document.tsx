import { Children } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document';

import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from '@/libs/createEmotionCache';

interface DocumentIProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function CustomDocument({ emotionStyleTags }: DocumentIProps) {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Emotion Styles SSR Cache
CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // @ts-ignore
      enhanceApp: (App) => (props) => <App {...props} emotionCache={cache} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      key={style.key}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
