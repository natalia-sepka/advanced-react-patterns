import mitt from "mitt";
import { useState } from "react";

export const emitter = mitt();

function App() {
    const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
        {changeShirts ? (
            <span>Shirts counts: </span>
        ) : (
            <span>Shoes counts: </span>
        )}
        <br />
        <input type="number" key={changeShirts ? "shorts" : "shoes"}/>
        <br />
        <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default App;
