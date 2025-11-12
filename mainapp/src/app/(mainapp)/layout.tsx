import Navbar from "@/components/layout/main-navbar";
import React from "react";

const MainLayout = ({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) => {
  return (
    <main>
      <Navbar />
      {children}
      {modal}
    </main>
  );
};

export default MainLayout;
