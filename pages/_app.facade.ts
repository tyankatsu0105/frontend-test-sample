import React from "react";
import { useDispatch } from "react-redux";

import { useGetCurrentUserQuery } from "~store/api";
import { actions } from "~store/application/user";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isError, isFetching } = useGetCurrentUserQuery();

  React.useEffect(() => {
    if (isFetching) return;

    const isLoggedIn = !isError;
    dispatch(actions.updatePermissions({ isLoggedIn }));
  }, [isFetching, isError, dispatch]);
};

export const useInitialize = () => {
  useAuth();
};
