import mitt from "mitt";
import { useLayoutEffect, useRef, useState} from "react";

export const emitter = mitt();

function App() {
    const [show, setShow] = useState(false);
    const [top, setTop] = useState(0);
    const buttonRef= useRef(null);

    useLayoutEffect(() => {
        if (buttonRef.current === null || !show) return setTop(0);
        const { bottom } = buttonRef.current.getBoundingClientRect();
        setTop(bottom + 30)
    }, [show]);

  return (
    <>
        <button ref={buttonRef} onClick={() => setShow((s) => !s)}>Show</button>
        <br />
        {show && (
            <div className="tooltip"
                style = {{
                    top: `${top}px`
                }}
            >
                Some text...
            </div>
        )}
    </>
  );
}

export default App;
