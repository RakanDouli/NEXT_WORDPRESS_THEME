
import {ApolloProvider} from "@apollo/client/react"
import { client } from '../lib/apollo'
import GlobalStyles from "../styles/GlobalStyles"

function MyApp({ Component, pageProps }) {
  return (

      <ApolloProvider client={client}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    
    )
}

export default MyApp