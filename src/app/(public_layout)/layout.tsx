import PublicLayout from "@/components/common/PublicLayout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default layout;
