import { createContext, useState } from 'react'
import useWidth from './hooks/useWidth'
import { translation } from './translation'

const TranslationContext = createContext()
const initialValue = 'en'
const animationControler = {
  home: false,
  about: false,
  projects: false,
  footer: false
}

const TraslationProvider = ({ children }) => {
  const [languaje] = useState(initialValue)
  const [text, setText] = useState(translation[languaje])
  const [currentPage, setCurrentPage] = useState('home')
  const [animationStart, setAnimationStart] = useState(animationControler)
  const { width } = useWidth()

  const selectCurrentPage = (value) => {
    if (value !== 'noIntersecting') {
      setCurrentPage(value)
      setAnimationStart((animationStart) => {
        return {
          ...animationStart,
          [value]: true
        }
      })
    }
  }

  const handleLanguaje = (e) => {
    setText(translation[e])
  }

  const data = {
    text,
    handleLanguaje,
    languaje,
    currentPage,
    selectCurrentPage,
    animationStart,
    width
  }

  return (
    <TranslationContext.Provider value={data}>
      {children}
    </TranslationContext.Provider>
  )
}

export { TraslationProvider }
export default TranslationContext
