import { ResponseResolver, rest, RestContext, RestRequest } from "msw";

import { LoginApiArg, LoginApiResponse } from "../../";

const path = "https://api.realworld.io/api/users/login";

export const handlerCreator = (
  resolver: ResponseResolver<
    RestRequest<LoginApiArg["loginUserRequest"]>,
    RestContext,
    LoginApiResponse
  >
) => rest.post(path, resolver);

export const pass = handlerCreator(async (req, res, ctx) => {
  const { user } = await req.body;

  return res(
    ctx.status(200),
    ctx.json({
      user: {
        bio: "bio",
        email: user.email,
        image: "image",
        token: "token",
        username: "User name",
      },
    })
  );
});

export const defaultHander = pass;
