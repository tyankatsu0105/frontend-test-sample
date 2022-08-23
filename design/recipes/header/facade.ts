import { useRouter } from "next/router";
import React from "react";

export const useLogout = () => {
  const { reload } = useRouter();
  const handleLogout = React.useCallback(() => {
    localStorage.removeItem("token");

    reload();
  }, [reload]);

  return {
    handleLogout,
  };
};
