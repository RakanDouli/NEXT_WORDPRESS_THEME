import {ApolloProvider} from "@apollo/client/react"
import { client } from '../lib/apollo'
import GlobalStyles from "../styles/GlobalStyles"
import Theme from "../styles/Theme"

function MyApp({ Component, pageProps }) {
  return (
      <Theme>
        <ApolloProvider client={client}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ApolloProvider>
      </Theme>
    )
}

export default MyApp