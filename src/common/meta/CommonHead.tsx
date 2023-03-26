import React, { useMemo } from 'react';
import Head from 'next/head';
import Script from 'next/script';

const Gtm = () => {
  return (
    <Script
      id='gtag-base'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',${process.env.NEXT_PUBLIC_GTM_ID})
    `,
      }}
    />
  );
};
type Props = {
  title?: string;
};

export const CommonHead: React.FC<Props> = ({ title }) => {
  const customTitle = useMemo(
    () => (title ? `${title} | エリンギプロフィールメーカー` : 'エリンギプロフィールメーカー'),
    [title],
  );

  return (
    <>
      <Head>
        <title>{customTitle}</title>
        <meta
          name='description'
          content='OpenAI搭載のエリンギが自己紹介で使えそうな文章を生成します|マッチングアプリ自己紹介|プロフィールメーカー'
        />
        <meta property='og:image' content='	https://www.eryngiiai.net/kinoko.jpg' />
        <meta property="og:site_name" content={customTitle} />
        <link rel='icon' href='/favicon.ico' />
        <Gtm />
      </Head>
    </>
  );
};
