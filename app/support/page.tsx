import { prefetch, trpc } from "@/trpc/admin/server";
import { ClientGreeting } from "./client-greeting";
import { ServerGreeting } from "./server-greeting";

export default async function Home() {
  // prefetch(trpc.hello.queryOptions({ text: "welcome" }));

  // return <ServerGreeting />;
  return <ClientGreeting />;
}
