import { ApolloClient, InMemoryCache } from '@apollo/client';
import buildHasuraProvider from 'ra-data-hasura';
import { DataProvider } from 'react-admin';

const hasuraUrl = process.env.REACT_APP_HASURA_URI;
const hasuraSecret = process.env.REACT_APP_HASURA_SECRET;

const createApolloClient = () => {
  const apolloClient = new ApolloClient({
    uri: hasuraUrl,
    headers: {
      'x-hasura-admin-secret': hasuraSecret
    },
    cache: new InMemoryCache()
  })
  return apolloClient;
}


const createHasuraProvider = async (): Promise<DataProvider> => {
  if (!hasuraSecret) {
    throw Error('Missing Hasura-secret');
  }

  if (!hasuraUrl) {
    throw Error('Missing Hasura-url');
  }

  try {
    const apolloClient = createApolloClient();

    const dataProvider: DataProvider = await buildHasuraProvider({ client: apolloClient });
    return dataProvider
  } catch (err) {
    console.error('Error creating hasura provider', err);
    throw Error('Could not create Hasura-provider');
  }
}

export default createHasuraProvider;