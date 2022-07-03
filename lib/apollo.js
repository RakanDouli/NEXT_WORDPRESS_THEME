// Add Apollo Client to this file
import {ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri:`${process.env.THEME_API}/graphql`,
    cache: new InMemoryCache(),
})