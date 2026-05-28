import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import InfiniteScrollQuotes from "./components/inifinite-scroll-quotes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <InfiniteScrollQuotes />
    </QueryClientProvider>
  );
}

export default App;
