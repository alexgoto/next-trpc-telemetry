import { openApiDocument } from "@/trpc/api/document";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(openApiDocument);
};
