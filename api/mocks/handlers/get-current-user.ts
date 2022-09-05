import { ResponseResolver, rest, RestContext, RestRequest } from "msw";

import { GetCurrentUserApiResponse } from "../../";

const path = "https://api.realworld.io/api/user";

export const handlerCreator = (
  resolver: ResponseResolver<
    RestRequest,
    RestContext,
    GetCurrentUserApiResponse
  >
) => rest.get(path, resolver);

export const pass = handlerCreator((req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      user: {
        bio: "bio",
        email: "email",
        image: "image",
        token: "token",
        username: "username",
      },
    })
  )
);

export const defaultHander = pass;
