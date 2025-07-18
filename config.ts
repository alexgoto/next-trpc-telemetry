import "dotenv/config";

const dbHost = process.env.POSTGRES_HOST!;
const dbPort = parseInt(process.env.POSTGRES_PORT!);
const dbName = process.env.POSTGRES_DB!;
const dbUser = process.env.POSTGRES_USER!;
const dbPassword = process.env.POSTGRES_PASSWORD!;

export const config = {
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword,
};
