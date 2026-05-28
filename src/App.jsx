import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import QueryCancellationWithAbortSignal from "./components/query-cancellation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <QueryCancellationWithAbortSignal />
    </QueryClientProvider>
  );
}

export default App;
