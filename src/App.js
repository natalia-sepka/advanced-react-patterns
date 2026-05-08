import Card from "./components/card";

function App() {

  return (
   <>
       <Card>
           <Card.Header>
                <h1 style={{ margin: "0" }}>Header</h1>
           </Card.Header>
           <Card.Body>
               Some random text Some random text Some random text Some random text Some random text
               Some random text Some random text Some random text Some random text Some random text
               Some random text Some random text Some random text Some random text Some random text
           </Card.Body>
           <Card.Footer>
               <button>Ok</button>
               <button>Cancel</button>
           </Card.Footer>
       </Card>
   </>
  );
}

export default App;
