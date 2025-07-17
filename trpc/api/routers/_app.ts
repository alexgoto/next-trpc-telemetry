import { baseProcedure, createTRPCRouter } from "../init";
import {
  hello,
  helloInputSchema,
  helloOutputSchema,
} from "@/trpc/procedures/hello";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .meta({ openapi: { method: "GET", path: "/hello" } })
    .input(helloInputSchema)
    .output(helloOutputSchema)
    .query((opts) => hello(opts.input)),
});

export type AppRouter = typeof appRouter;
