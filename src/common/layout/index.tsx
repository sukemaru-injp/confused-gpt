import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { colors } from '../ui/styles';
import { Kosugi } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const kosugi = Kosugi({
  subsets: ['latin'],
  weight: '400',
});

type Props = {
  children: React.ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={kosugi.className}>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: `${colors.bg}` }}>{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};
