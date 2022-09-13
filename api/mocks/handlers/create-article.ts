import { ResponseResolver, rest, RestContext, RestRequest } from "msw";

import { CreateArticleApiArg, CreateArticleApiResponse } from "../../";

const path = "https://api.realworld.io/api/articles";

export const handlerCreator = (
  resolver: ResponseResolver<
    RestRequest<CreateArticleApiArg["newArticleRequest"]>,
    RestContext,
    CreateArticleApiResponse
  >
) => rest.post(path, resolver);

export const pass = handlerCreator(async (req, res, ctx) => {
  const { article } = await req.body;

  return res(
    ctx.status(200),
    ctx.json({
      article: {
        author: {
          bio: "bio",
          following: false,
          image: "image",
          username: "username",
        },
        body: article.body,
        createdAt: "2021-01-01T00:00:00.000Z",
        description: article.description,
        favorited: false,
        favoritesCount: 0,
        slug: "slug",
        tagList: [],
        title: article.title,
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
    })
  );
});

export const defaultHander = pass;
