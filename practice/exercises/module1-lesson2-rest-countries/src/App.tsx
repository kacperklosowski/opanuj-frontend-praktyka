import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CountrySearchContainer from './containers/CountrySearchContainer';
const queryClient = new QueryClient();

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountrySearchContainer />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
