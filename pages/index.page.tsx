import type { NextPage, GetServerSideProps } from "next";
import { useArticles } from "./index.facade";
import { Page } from "~design/layouts";
import { Card } from "~design/components";
import Link from "next/link";
import styles from "./index.module.scss";
import { wrapper } from "~store/index";

import { api } from "~store/api";

const Home: NextPage = () => {
  const { data } = useArticles();

  return (
    <Page title="Top">
      {data?.articles.map((article, index) => (
        <Card
          className={styles.card}
          key={index}
          renderHead={(props) => (
            <Link
              href={{
                pathname: "/posts/[slug]",
                query: { slug: article.slug },
              }}
            >
              <a>
                <h2 className={props.styles.heading}>{article.title}</h2>
              </a>
            </Link>
          )}
          renderBody={() => <p>{article.body}</p>}
        />
      ))}
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    store.dispatch(api.endpoints.getArticles.initiate({}));

    await Promise.all(api.util.getRunningOperationPromises());

    return {
      props: {},
    };
  });

export default Home;
