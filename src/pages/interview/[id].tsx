import React from 'react';
import { useRouter } from 'next/router';
import { Failed } from '@/features/Failed';
import { isJobType } from '@/model/JobModel';
import { InterView } from '@/features/Interview';

export default function InterviewPage() {
  const {
    query: { id },
  } = useRouter();

  if (typeof id !== 'string' || !isJobType(id)) {
    return (
      <>
        <Failed />
      </>
    );
  }

  return (
    <>
      <InterView job={id} />
    </>
  );
}
