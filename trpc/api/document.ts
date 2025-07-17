import { generateOpenApiDocument } from "trpc-to-openapi";
import { appRouter } from "./routers/_app";

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "OpenAPI",
  version: "0.1.0",
  baseUrl: "http://localhost:3000",
});
