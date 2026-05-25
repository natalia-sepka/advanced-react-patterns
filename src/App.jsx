import FetchTopQuotes from "./components/top-quotes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <FetchTopQuotes />
    </QueryClientProvider>
  );
}

export default App;
