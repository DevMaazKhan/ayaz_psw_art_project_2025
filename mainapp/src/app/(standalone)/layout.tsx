import React from "react";

const StandaloneLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <main>{children}</main>;
};

export default StandaloneLayout;
