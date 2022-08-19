import type { NextPage, GetStaticPaths } from "next";
import { useArticles } from "./index.facade";
import { Page } from "~design/layouts";
import { Card } from "~design/components";
import Link from "next/link";
import styles from "./index.module.scss";

import type { MultipleArticlesResponse } from "~store/api";

const Home: NextPage<MultipleArticlesResponse> = () => {
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

export default Home;
