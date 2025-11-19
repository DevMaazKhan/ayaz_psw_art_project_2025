import React from "react";

const AdminMainLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <main>{children}</main>;
};

export default AdminMainLayout;
