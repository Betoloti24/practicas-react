import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import useSession from '../hooks/useSession';


// Define el token de acceso
const { getValue } = useSession();
const token = getValue('access_token');
const csrfToken = getValue('csrftoken');

// Middleware para añadir el token de autorización a cada solicitud
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
      'X-CSRFToken': csrfToken ? csrfToken : 'Co1gtPUOld53Gn5UhtlJZl4lAwqxmxpm',
    }
  };
});

// HTTP Link para conectarse a la API GraphQL
const httpLink = new HttpLink({
  uri: 'http://127.0.0.1:8011/api-graphql/', // Reemplaza con tu URL de GraphQL
});

// Configura Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;





/*
token _legacy_auth0.btRDBCCYrD8Zl9q48pdAOJf4DEcJaxDM.is.authenticated=true; auth0.btRDBCCYrD8Zl9q48pdAOJf4DEcJaxDM.is.authenticated=true; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3ODc4OTg3LCJpYXQiOjE3MTY1ODI5ODcsImp0aSI6IjA0ZDc1NWY0ZTY3NTQwNWM4YzBjNWI3OGMwMjk4NGRmIiwidXNlcl9pZCI6Mn0.D0FtEKw41DtVFuRCLlsDJCP35b3b97EllDTu14x0TSw; refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNjY2OTM4NywiaWF0IjoxNzE2NTgyOTg3LCJqdGkiOiJlNDc5YzQyZGQ5NGY0OGUzODkwYTkxNjJlY2VmOGVlZiIsInVzZXJfaWQiOjJ9.hX0M5KfKa5N6wvFNpfc8x56yuPTloced8Q8nSN3U998; state=authorized

*/