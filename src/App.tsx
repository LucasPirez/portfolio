import Port from './components/Portfolio';
import { TraslationProvider } from './TraslationContext';

function App() {
  return (
    <div className="w-full overflow-x-hidden  sm:overflow-x-visible">
      <TraslationProvider>
        <Port />
      </TraslationProvider>
    </div>
  );
}

export default App;
