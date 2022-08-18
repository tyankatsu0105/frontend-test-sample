import type { NextPage, GetStaticPaths, InferGetStaticPropsType } from "next";

import { Page } from "~design/layouts";

import { useRouter } from "next/router";
import { wrapper } from "~store/index";
import { ParsedUrlQuery } from "querystring";

import { api, SingleArticleResponse } from "~store/api";

import { createStore } from "~store/index";

export const getStaticPaths: GetStaticPaths = async () => {
  const store = createStore();
  const result = await store.dispatch(api.endpoints.getArticles.initiate({}));

  return {
    paths:
      result.data?.articles.map((article) => `/posts/${article.slug}`) ?? [],
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}
type Props = SingleArticleResponse | {};

export const getStaticProps = wrapper.getStaticProps<Props>(
  (store) => async (context) => {
    const { slug } = context.params as Params;
    const result = store.dispatch(api.endpoints.getArticle.initiate({ slug }));

    await Promise.all(api.util.getRunningOperationPromises());

    const { data } = await result;

    return {
      props: data || {},
    };
  }
);

const Post: NextPage<Props> = (props) => {
  console.log({ props });

  const { query } = useRouter();
  const { slug } = query as { slug: string };

  return <Page title="Post">aaa</Page>;
};

export default Post;
