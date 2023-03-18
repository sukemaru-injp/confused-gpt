import React from "react";
import { Header } from "./Header";
import { colors } from "../ui/styles";
type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({
  children
}) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: `${colors.bg}` }}>
        {children}
      </main>
    </>
  )
}