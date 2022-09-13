import { defaultHander as GetArticlesHandler } from "./get-articles";
import { defaultHander as GetCurrentUserHandler } from "./get-current-user";
import { defaultHander as LoginHandler } from "./login";

export const handler = [
  GetCurrentUserHandler,
  GetArticlesHandler,
  LoginHandler,
];
