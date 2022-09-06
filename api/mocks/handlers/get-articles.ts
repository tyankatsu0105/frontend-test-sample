import { ResponseResolver, rest, RestContext, RestRequest } from "msw";

import { GetArticlesApiResponse } from "../../";

const path = "https://api.realworld.io/api/articles";

export const handlerCreator = (
  resolver: ResponseResolver<RestRequest, RestContext, GetArticlesApiResponse>
) => rest.get(path, resolver);

export const pass = handlerCreator((req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      articles: [
        {
          author: {
            bio: "I work at statefarm",
            following: false,
            image: "https://i.stack.imgur.com/xHWG8.jpg",
            username: "jake",
          },
          body: "It takes a Jacobian",
          createdAt: "2016-02-18T03:22:56.637Z",
          description: "Ever wonder how?",
          favorited: false,
          favoritesCount: 0,
          slug: "how-to-train-your-dragon",
          tagList: ["dragons", "training"],
          title: "How to train your dragon",
          updatedAt: "2016-02-18T03:48:35.824Z",
        },
      ],
      articlesCount: 1,
    })
  )
);

export const defaultHander = pass;
