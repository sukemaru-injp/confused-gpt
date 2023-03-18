import React from 'react';
import { ZodiacType } from '@/model/Zodiac';
type Props = {
  zodiac: ZodiacType;
  date: string;
};

export const Fortune = (_props: Props): JSX.Element => {
  return (
    <>
      <h2>占い結果</h2>
    </>
  );
};
