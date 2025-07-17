import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@/trpc/admin/init";
import { appRouter } from "@/trpc/admin/routers/_app";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/admin",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };
