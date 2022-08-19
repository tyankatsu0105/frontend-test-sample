# Frontend のテスト戦略の実験

## Techs

- Next.js
- Storybook
- Redux Toolkit
- RTK Query

## 参考

- https://github.com/phryneas/ssr-experiments/tree/main/nextjs-blog
  - redux の ssr

## memo

### ssr

```tsx
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    store.dispatch(api.endpoints.getArticles.initiate({}));

    await Promise.all(api.util.getRunningOperationPromises());

    return {
      props: {},
    };
  });
```

### ssg

```tsx
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
```
