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
type Props = SingleArticleResponse | false;

export const getStaticProps = wrapper.getStaticProps<Props>(
  (store) => async (context) => {
    const { slug } = context.params as Params;
    const result = store.dispatch(api.endpoints.getArticle.initiate({ slug }));

    await Promise.all(api.util.getRunningOperationPromises());

    const { data } = await result;

    return {
      props: data || false,
    };
  }
);

const Post: NextPage<Props> = (props) => {
  if (!props) return <></>;

  return (
    <Page title="Post">
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </Page>
  );
};

export default Post;
