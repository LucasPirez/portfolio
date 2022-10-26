import "./App.css";
import Port from "./components/Portfolio";
import { TraslationProvider } from "./TraslationContext";

function App() {
  return (
    <div className=" sm:w-full ">
      <TraslationProvider>
        <Port />
      </TraslationProvider>
    </div>
  );
}

export default App;
