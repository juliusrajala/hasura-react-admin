import { useEffect, useState } from 'react';
import './App.css';
import { Admin, DataProvider } from 'react-admin';
import buildHasuraProvider from './core/hasuraProvider';

function App() {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [providerError, setProviderError] = useState<string | null>(null);

  useEffect(() => {
    const createDataProvider = async (): Promise<void> => {
      try {
        const dataProvider = await buildHasuraProvider();
        setDataProvider(() => dataProvider);
      } catch (err) {
        setProviderError(err || 'Unknown error creating provider');
      }
    };
    createDataProvider();
  }, []);

  if (!dataProvider) {
    return <span>Loading...</span>
  }

  if (providerError) {
    return <div>
      <h1>Provider error stopped React-Admin from initializing.</h1>
      <code>{providerError}</code>
    </div>
  }

  return (
    <Admin dataProvider={dataProvider}>
      <span>Hello world!</span>
    </Admin>
  );
}

export default App;
