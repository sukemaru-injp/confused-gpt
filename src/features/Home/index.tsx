import React from 'react';
import { Resource } from '@/utils';
import { HelloAdapter } from '@/utils/adapter/helloAdapter';
import { Form } from './components/Form';
import { TopSection } from './components/TopSection';
import { FortuneSection } from './components/FortuneSection';

const HomeFeature: React.FC = () => {
  return (
    <>
      <TopSection />
      <FortuneSection />
    </>
  );
};
export default HomeFeature;
