import { caller } from "@/trpc/support/server";

export async function ServerGreeting() {
  const data = await caller.hello({ text: "welcome from server" });

  return <div>{data.greeting}</div>;
}
