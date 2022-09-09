import { useRouter } from "next/router";
import React from "react";

export const useLogout = () => {
  const { reload, replace } = useRouter();

  const handleLogout = React.useCallback(async () => {
    localStorage.removeItem("token");
    await replace("/");
    reload();
  }, [reload, replace]);

  return {
    handleLogout,
  };
};
