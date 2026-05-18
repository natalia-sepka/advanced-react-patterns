import Display from "./components/display";
import Buttons from "./components/buttons";
import { CartProvider } from "./components/state-context";

function App() {

  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}

export default App;
