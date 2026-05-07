import { RecursiveComponent } from "./components/recursive";

const myNestedObject = {
    key1: "value",
    key2: {
        innerKey1: "innerValue1",
        innerKey2: {
            innerInnerKey1: "innerInnerKey1" ,
            innerInnerKey2: "innerInnerKey2" ,
        }
    },
    key3: "value3"
}

function App() {

  return (
   <>
       <RecursiveComponent data={myNestedObject} />
   </>
  );
}

export default App;
