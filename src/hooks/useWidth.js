import { useState, useEffect } from 'react'

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const event = (e) => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [])

  return {
    width
  }
}
