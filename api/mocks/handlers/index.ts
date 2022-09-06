import { defaultHander as GetArticlesHandler } from "./get-articles";
import { defaultHander as GetCurrentUserHandler } from "./get-current-user";

export const handler = [GetCurrentUserHandler, GetArticlesHandler];
