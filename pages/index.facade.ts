import { useGetArticlesQuery } from "~store/api";

export const useArticles = () => {
  const result = useGetArticlesQuery({});

  return result;
};
