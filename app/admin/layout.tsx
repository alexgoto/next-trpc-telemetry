import { TRPCReactProvider } from "@/trpc/admin/client";
import { HydrateClient } from "@/trpc/admin/server";
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
