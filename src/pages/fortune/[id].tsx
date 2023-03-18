import React from 'react';
import { Fortune } from '@/features/Fortune';
import { useRouter } from 'next/router';
import { Failed } from '@/features/Failed';
export default function FortuneDetail() {
  const {
    query: { id, date },
  } = useRouter();

  if (id == null || typeof id !== 'string' || date == null || typeof date !== 'string') {
    return (
      <>
        <Failed />
      </>
    );
  }

  console.log(id, date);
  return (
    <>
      <Fortune />
    </>
  );
}
