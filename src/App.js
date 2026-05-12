import mitt from "mitt";
import { useDeferredValue, useState } from "react";
import { HeavyComponent } from "./components/heavy-component";

export const emitter = mitt();

function App() {
    const [keyword, setKeyword] = useState("");
    const deferredKeyword = useDeferredValue(keyword);

  return (
    <>
        <input onChange={(e) => setKeyword(e.target.value)} />
        <HeavyComponent keyword={deferredKeyword} />
    </>
  );
}

export default App;
