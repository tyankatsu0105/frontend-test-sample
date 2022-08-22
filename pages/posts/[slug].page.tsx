import type { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import { Card } from "~design/components";
import { Main, Page } from "~design/layouts";
import { Next } from "~shared/modules";
import { api } from "~store/api";
import { wrapper } from "~store/index";
import { createStore } from "~store/index";

import { useArticle } from "./[slug].facade";
export const getStaticPaths: GetStaticPaths = async () => {
  const store = createStore();
  const result = await store.dispatch(api.endpoints.getArticles.initiate({}));

  return {
    fallback: true,
    paths:
      result.data?.articles.map((article) => `/posts/${article.slug}`) ?? [],
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

const Post: Next.NextPageWithLayout = () => {
  const router = useRouter();

  const { slug } = router.query as Params;
  const { data } = useArticle({
    skip: router.isFallback,
    slug,
  });

  return (
    <Page title={data?.article.title}>
      <Card
        renderBody={() => <p>{data?.article.body}</p>}
        renderHead={({ styles }) => (
          <h2 className={styles.heading}>{data?.article.description}</h2>
        )}
      />
    </Page>
  );
};

Post.getLayout = Next.getLayout((page) => <Main>{page}</Main>);
export default Post;
