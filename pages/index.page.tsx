import Link from "next/link";

import { Card } from "~design/components";
import { Main, Page } from "~design/layouts";
import { Next } from "~shared/modules";

import { useArticles } from "./index.facade";
import styles from "./index.module.scss";

const Home: Next.NextPageWithLayout = () => {
  const { data } = useArticles();

  return (
    <Page title="Top">
      {data?.articles.map((article, index) => (
        <Card
          key={index}
          className={styles.card}
          renderBody={() => <p>{article.body}</p>}
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
        />
      ))}
    </Page>
  );
};

export const getLayout = Next.getLayout((page) => <Main>{page}</Main>);

Home.getLayout = getLayout;

export default Home;
