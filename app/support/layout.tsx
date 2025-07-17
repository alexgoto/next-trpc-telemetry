import { TRPCReactProvider } from "@/trpc/support/client";
import { HydrateClient } from "@/trpc/support/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <HydrateClient>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </TRPCReactProvider>
  );
}
