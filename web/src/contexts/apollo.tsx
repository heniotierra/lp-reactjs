import React from "react";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";

let client: ApolloClient<NormalizedCacheObject> | undefined;
let uri = process.env.REACT_APP_API_URL;

// eslint-disable-next-line no-alert
const httpLink = createHttpLink({
  uri: `${uri}/graphql`,
  //TODO: we need to bring this back when we implement authentication
  // credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers,
  };
});

type PropsType = {
  children: React.ReactNode;
};

export const ApolloManager = (props: PropsType) => {
  client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
