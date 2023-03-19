import React from 'react';
import { Resource } from '@/utils';
import { HelloAdapter } from '@/utils/adapter/helloAdapter';
import { Form } from './components/Form';
import { TopSection } from './components/TopSection';
type Props = {
  helloResource: Resource<HelloAdapter>;
};

const HomeFeature: React.FC<Props> = () => {
  return (
    <>
      <TopSection />
      <Form />
    </>
  );
};
export default HomeFeature;
