import "reflect-metadata";

import path from "path";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { getEnv } from "../utils/getEnv";
import { PropertyResolver } from "./resolvers/property";

export async function graphQLServer() {
  const schema = await buildSchema({
    resolvers: [
      PropertyResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    validate: false,
  });

  return new ApolloServer({
    schema,
    // Include stacktrace only in development
    debug: getEnv("NODE_ENV", true) === "development",
  });
}
