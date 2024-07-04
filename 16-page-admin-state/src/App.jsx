import ViewRouter from "./routes/Router";
import './css/App.css'
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { GeneralProvider } from "./contexts/GeneralContext";

function App() {
  return (
    <GeneralProvider>
      <ApolloProvider client={client}>
        <ViewRouter />
      </ApolloProvider>
    </GeneralProvider>
  )
}

export default App
