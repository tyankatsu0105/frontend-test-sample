import type { NextPage, GetStaticPaths } from "next";

import { Page } from "~design/layouts";

import { wrapper } from "~store/index";
import { ParsedUrlQuery } from "querystring";

import { api } from "~store/api";
import { useArticle } from "./[slug].facade";

import { createStore } from "~store/index";

import { Card } from "~design/components";
import { useRouter } from "next/router";

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

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const { slug } = context.params as Params;
    const result = store.dispatch(api.endpoints.getArticle.initiate({ slug }));

    await Promise.all(api.util.getRunningOperationPromises());

    const { data } = await result;

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {},
      revalidate: 60,
    };
  }
);

const Post: NextPage = () => {
  const router = useRouter();

  const { slug } = router.query as Params;
  const { data } = useArticle({
    slug,
    skip: router.isFallback,
  });

  return (
    <Page title={data?.article.title}>
      <Card
        renderHead={({ styles }) => (
          <h2 className={styles.heading}>{data?.article.description}</h2>
        )}
        renderBody={() => <p>{data?.article.body}</p>}
      />
    </Page>
  );
};

export default Post;
