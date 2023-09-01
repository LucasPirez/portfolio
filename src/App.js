import Port from './components/Portfolio'
import { TraslationProvider } from './TraslationContext'

function App() {
  const arr = [
    '#0A0A0A',
    '#121212',
    '#15292B',
    '#161618',
    '#181818',
    '#192734',
    '#212121',
    '#212124',
    '#22303C',
    '#242526',
    '#282828',
    '#3A3B3C',
    '#404040'
  ]
  return (
    <div className="w-full overflow-x-hidden  sm:overflow-x-visible">
      <TraslationProvider>
        <Port />
        <div className="h-full w-full flex gap-10 flex-wrap">
          {arr.map((u, i) => (
            <div
              className={`h-[300px] w-[300px] m-2 ml-8 `}
              style={{ background: u }}
            >
              <p className="text-white">{i + 1}</p>
            </div>
          ))}
        </div>
      </TraslationProvider>
    </div>
  )
}

export default App
