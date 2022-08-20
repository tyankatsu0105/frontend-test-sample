import { useGetArticleQuery } from "~store/api";

type UseArticleProps = {
  skip: boolean;
  slug: string;
};
export const useArticle = (props: UseArticleProps) => {
  const result = useGetArticleQuery({ slug: props.slug }, { skip: props.skip });

  return result;
};
