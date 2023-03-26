import React from 'react';
import { CommonHead } from '@/common/meta/CommonHead';
import dynamic from 'next/dynamic';

const HomeTemplate = dynamic(() => import('../features/Home'), { ssr: false });

export default function Home() {
  return (
    <>
      <CommonHead />
      <HomeTemplate />
    </>
  );
}
