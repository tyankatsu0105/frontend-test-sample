export * from "~api/index";
import { api as OriginAPI } from "~api/index";

export const api = OriginAPI.enhanceEndpoints({});
