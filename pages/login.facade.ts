import { useGetArticleQuery } from "~store/api";

type UseArticleProps = {
  slug: string;
  skip: boolean;
};
export const useArticle = (props: UseArticleProps) => {
  const result = useGetArticleQuery({ slug: props.slug }, { skip: props.skip });

  return result;
};
