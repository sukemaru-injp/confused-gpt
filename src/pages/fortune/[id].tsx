import React from 'react';
import { Fortune } from '@/features/Fortune';
import { useRouter } from 'next/router';
import { Failed } from '@/features/Failed';
import { isZodiacType } from '@/model/Zodiac';

export default function FortuneDetail() {
  const {
    query: { id, date },
  } = useRouter();

  if (typeof id !== 'string' || typeof date !== 'string' || !isZodiacType(id)) {
    return (
      <>
        <Failed />
      </>
    );
  }

  return (
    <>
      <Fortune zodiac={id} date={date} />
    </>
  );
}
