import Footer from "@/components/layout/footer/main-footer";
import Navbar from "@/components/layout/navbar/main-navbar";
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
      <Footer />
    </main>
  );
};

export default MainLayout;
