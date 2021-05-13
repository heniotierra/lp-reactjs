import express from "express";
import cors from "cors";
import { getEnv } from "./utils/getEnv";
import { graphQLServer } from "./graphql";
import database from "./services/database";

export default async function Server(): Promise<express.Express> {
  const server = express();

  await database.init();
  
  const origin = getEnv("CORS_ORIGIN");

  const corsMiddleware = cors({ origin });
  const apolloServer = await graphQLServer();

  server.use(corsMiddleware);

  apolloServer.applyMiddleware({
    app: server,
    path: "/graphql",
  });

  return server;
}
