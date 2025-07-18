import { migrate as pgMigrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db";

export function migrate() {
  return pgMigrate(db, { migrationsFolder: "./migrations" });
}
