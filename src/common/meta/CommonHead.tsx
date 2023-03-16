import React, { useMemo } from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

export const CommonHead: React.FC<Props> = ({ title }) => {
  const customTitle = useMemo(
    () => (title ? `${title} | エリンギ占い` : 'エリンギ占い'),
    [title],
  );

  return (
    <Head>
      <title>{customTitle}</title>
      <meta
        name='description'
        content='ChatGPT搭載のエリンギが今日のあなたの運勢を占います'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
