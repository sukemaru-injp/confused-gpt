import React, { useMemo } from 'react';
import { ZodiacType } from '@/model/Zodiac';
import dynamic from 'next/dynamic';
import { generateFortuneAdapter } from '@/utils/adapter/generateFortuneAdapter';
import { resource } from '@/utils';

const FortuneContainer = dynamic(() => import('./FortuneContainer'), { ssr: false });

type Props = {
  zodiac: ZodiacType;
  date: string;
};

export const Fortune = ({ zodiac, date }: Props): JSX.Element => {
  const fortuneResource = useMemo(() => {
    return resource(
      generateFortuneAdapter({ zodiac, mock: process.env.NODE_ENV !== 'production' }),
    );
  }, [zodiac]);

  return (
    <>
      <React.Suspense fallback={<p>Loading...</p>}>
        <h2>占い結果</h2>
        <FortuneContainer fortuneResource={fortuneResource} />
      </React.Suspense>
    </>
  );
};
