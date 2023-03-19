import React, { useMemo } from 'react';
import { Resource } from '@/utils';
import { FortuneAdapter } from '@/utils/adapter/generateFortuneAdapter';
import { Failed } from '../Failed';
import { FortuneResult } from '@/model/FortuneModel';
import { getZodiacLabel, ZodiacType } from '@/model/Zodiac';

type ViewProps = {
  fortuneOkResult: FortuneResult;
  zodiac: ZodiacType;
  date: string; // DateString yyyyMMdd
};

const FortuneResultView = ({ fortuneOkResult, zodiac }: ViewProps): JSX.Element => {
  const texts = useMemo(() => {
    const res = fortuneOkResult.data.text;
    if (res == null) {
      return ['Sorry,please try again'];
    }

    return res.split('\n');
  }, [fortuneOkResult]);

  const zodiacLabel = useMemo(() => getZodiacLabel(zodiac), [zodiac]);

  return (
    <>
      <div>
        <h2>今日の{zodiacLabel}の運勢</h2>
      </div>
      <div>
        {texts.map((t, idx) => {
          return <p key={`t-${idx}`}>{t}</p>;
        })}
      </div>
    </>
  );
};

type Props = {
  fortuneResource: Resource<FortuneAdapter>;
  zodiac: ZodiacType;
  date: string; // DateString yyyyMMdd
};

export default function FortuneContainer({ fortuneResource, zodiac, date }: Props): JSX.Element {
  const result = fortuneResource.read();

  if (result.isErr()) {
    return <Failed />;
  }
  return (
    <>
      <FortuneResultView fortuneOkResult={result.value} zodiac={zodiac} date={date} />
    </>
  );
}
