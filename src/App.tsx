import Port from './components/Portfolio';
import { TranslationProvider } from './TraslationContext';

function App() {
  return (
    <div className="w-full overflow-x-hidden  sm:overflow-x-visible">
      <TranslationProvider>
        <Port />
      </TranslationProvider>
    </div>
  );
}

export default App;
