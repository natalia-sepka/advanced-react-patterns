import mitt from "mitt";
import { Child } from "./components/child";
import { ErrorBoundary } from "./components/error-boundary";

export const emitter = mitt();

function App() {
  return (
    <>
        <h1>Parent Component</h1>
        <ErrorBoundary fallback={<h1>Error at Child level</h1>}>
            <Child />
        </ErrorBoundary>
    </>
  );
}

export default App;
