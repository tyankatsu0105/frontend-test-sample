import { defaultHander as CreateArticleHandler } from "./create-article";
import { defaultHander as CreateUserHandler } from "./create-user";
import { defaultHander as GetArticleHandler } from "./get-article";
import { defaultHander as GetArticlesHandler } from "./get-articles";
import { defaultHander as GetCurrentUserHandler } from "./get-current-user";
import { defaultHander as LoginHandler } from "./login";

export const handler = [
  CreateArticleHandler,
  CreateUserHandler,
  GetArticlesHandler,
  GetCurrentUserHandler,
  LoginHandler,
  GetArticleHandler,
];
