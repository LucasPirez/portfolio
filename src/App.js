import "./App.css";
import Port from "./components/Portfolio";
import Prueba from "./Prueba";
import { TraslationProvider } from "./TraslationContext";

function App() {
  return (
    <div className=" sm:w-full ">
      <TraslationProvider>
        <Port />

        {/* <Prueba /> */}
      </TraslationProvider>
    </div>
  );
}

export default App;
