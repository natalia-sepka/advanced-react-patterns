import mitt from "mitt";
import { useCallback, useState, useRef } from "react";

export const emitter = mitt();

function App() {
    const [showInput, setShowInput] = useState(false);
    const realInputRef = useRef();
    const inputRef = useCallback((input) => {
        realInputRef.current = input;
        if (input === null) return;
        input.focus()
    }, []);

  return (
    <>
        <button onClick={() => setShowInput((s) => !s)}>Switch</button>
        {showInput && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
