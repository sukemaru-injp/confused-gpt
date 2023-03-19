import React, { useMemo } from 'react';
import { CommonHead } from '@/common/meta/CommonHead';
import Image from 'next/image';
import { helloAdapter } from '@/utils/adapter/helloAdapter';
import { resource } from '@/utils';
import dynamic from 'next/dynamic';

const Testing = dynamic(() => import('../features/Home'), { ssr: false });

export default function Home() {
  const hello = useMemo(() => {
    return resource(helloAdapter());
  }, []);

  return (
    <>
      <CommonHead />
      <div>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Testing helloResource={hello} />
        </React.Suspense>

        <Image height={300} width={300} src='/eringi-min.png' alt='eringi' />
      </div>
    </>
  );
}
