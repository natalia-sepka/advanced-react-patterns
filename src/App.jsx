import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { UpdateQuotes } from "./components/update-code";
import FetchTopQuotes from "./components/top-quotes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <UpdateQuotes />
        <FetchTopQuotes />
    </QueryClientProvider>
  );
}

export default App;
