import '../styles/globals.css';
import React, { FC, ReactNode, Suspense } from 'react';
import StyledComponentsRegistry from './lib/registry'

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: 'エリンギ村',
  description: 'erinngi村',
  // icons: {
  //   icon: '/mountain-favicon.png',
  // }
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Suspense fallback={<p>Loading...</p>}>
              <main style={{ minHeight: '100vh' }}>{children}</main>
            </Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
