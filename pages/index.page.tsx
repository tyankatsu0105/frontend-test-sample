import type { NextPage } from "next";
import { useArticle } from "./index.facade";
import { Page } from "~design/layouts";
import { Card } from "~design/components";
import Link from "next/link";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const { data } = useArticle();

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
