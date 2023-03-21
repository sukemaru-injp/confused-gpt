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
    () => (title ? `${title} | エリンギ質問Gen` : 'エリンギ質問Gen'),
    [title],
  );

  return (
    <>
      <Head>
        <title>{customTitle}</title>
        <meta name='description' content='OpenAI搭載のエリンギが採用面接でするべき質問を教えます' />
        <link rel='icon' href='/favicon.ico' />
        <Gtm />
      </Head>
    </>
  );
};
