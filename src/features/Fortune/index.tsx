import React, { useMemo } from 'react';
import { ZodiacType } from '@/model/Zodiac';
import dynamic from 'next/dynamic';
import { generateFortuneAdapter } from '@/utils/adapter/generateFortuneAdapter';
import { resource } from '@/utils';

const FortuneContainer = dynamic(() => import('./FortuneContainer'), { ssr: false });

type Props = {
  zodiac: ZodiacType;
  date: string; // DateString yyyyMMdd
};

export const Fortune = ({ zodiac, date }: Props): JSX.Element => {
  const fortuneResource = useMemo(() => {
    return resource(
      generateFortuneAdapter({ zodiac, mock: false }),
    );
  }, [zodiac]);

  return (
    <>
      <React.Suspense fallback={<p>Loading...</p>}>
        <FortuneContainer fortuneResource={fortuneResource} date={date} zodiac={zodiac} />
      </React.Suspense>
    </>
  );
};
