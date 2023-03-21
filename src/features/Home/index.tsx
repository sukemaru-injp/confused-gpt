import React from 'react';
import { TopSection } from './components/TopSection';
import { MainSection } from './components/MainSection';
import { AuthorSection } from './components/AuthorSection';

const HomeFeature: React.FC = () => {
  return (
    <>
      <TopSection />
      <MainSection />
      <AuthorSection />
    </>
  );
};
export default HomeFeature;
