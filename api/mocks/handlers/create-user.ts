import { ResponseResolver, rest, RestContext, RestRequest } from "msw";

import { CreateUserApiArg, CreateUserApiResponse } from "../../";

const path = "https://api.realworld.io/api/users";

export const handlerCreator = (
  resolver: ResponseResolver<
    RestRequest<CreateUserApiArg["newUserRequest"]>,
    RestContext,
    CreateUserApiResponse
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
        username: user.username,
      },
    })
  );
});

export const defaultHander = pass;
