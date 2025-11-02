import Menu from "@/components/layout/main-menu";
import Navbar from "@/components/layout/main-navbar";
import React from "react";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="group" id="main">
      <Navbar />
      <Menu />
      {children}
    </main>
  );
};

export default MainLayout;
