import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-to-openapi";

export const createTRPCContext = async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { apiId: "api_123" };
};

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC
  .context<ReturnType<typeof createTRPCContext>>()
  .meta<OpenApiMeta>()
  .create();

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
