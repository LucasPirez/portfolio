import { useRef, useEffect } from 'react'

export default function useClick(callback) {
  const ref = useRef()

  useEffect(() => {
    const event = (e) => {
      e.stopPropagation()
      e.preventDefault()
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }
    document.addEventListener('click', event)

    return () => document.removeEventListener('click', event)
  }, [ref])

  return ref
}
