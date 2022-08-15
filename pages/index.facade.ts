import { useGetArticlesQuery } from "~store/api";

export const useArticle = () => {
  const result = useGetArticlesQuery({});

  return result;
};
