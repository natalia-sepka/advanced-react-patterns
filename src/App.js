import mitt from "mitt";
import { createPortal } from "react-dom";
import { useState } from "react";

export const emitter = mitt();

function App() {
  const [show, setShow] = useState(false);

  return (
   <div style={{ position: "absolute", marginTop: "200px" }}>
      <h1>Other Content</h1>
       <button onClick={() => setShow(true)}>Show Message</button>
       <Alert show={show} onClose={() => setShow(false)}>
           A sample message to show.
           < br />
           Click it to close
       </Alert>
   </div>
  );
}

export default App;

const Alert = ({ children, onClose, show }) => {
    if (!show) return;

    return createPortal (
        <div className={"alert"} onClick={onClose}>
            {children}
        </div>,
        document.querySelector("#alert-holder")
    );
}