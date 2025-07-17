import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .meta({ openapi: { method: "GET", path: "/hello" } })
    .input(
      z.object({
        message: z.string(),
      }),
    )
    .output(
      z.object({
        greeting: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello api user ${opts.ctx.apiId} ${opts.input.message}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
