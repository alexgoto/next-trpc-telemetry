"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/support/client";

export function ClientGreeting() {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(
    trpc.hello.queryOptions({ text: "welcome" }),
  );

  return <div>{data.greeting}</div>;
}
