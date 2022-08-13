export * from "../../api";
import { api as OriginAPI } from "../../api";

export const api = OriginAPI.enhanceEndpoints({});
