import React from "react";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({
  children
}) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        {children}
      </main>
    </>
  )
}