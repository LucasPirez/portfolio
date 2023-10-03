import { useState, useEffect } from 'react'
import Sun from '../../icons/Sun'
import Moon from '../../icons/Moon'

const themes = {
  light: 'dark',
  dark: 'os',
  os: 'light'
}

export default function Theme({ setChangeTheme }) {
  const init = localStorage.theme
    ? localStorage.theme
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'os'
    : 'light'
  const [select, setSelect] = useState(init)

  function handleClick(e) {
    e.preventDefault()

    setSelect(themes[select])
  }

  useEffect(() => {
    if (select === 'os') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', select)
    }

    if (!('theme' in localStorage)) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      }
    } else {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    setChangeTheme(Math.random())
  }, [select])

  return (
    <>
      <button
        className="bg-zinc-900 rounded-2xl px-2 hover:scale-105 transition-all duration-300 h-8 border-2 border-cyan-800 z-30 "
        onClick={handleClick}
      >
        {select === 'os' ? (
          <span className="text-cyan-400">OS</span>
        ) : select === 'light' ? (
          <Sun />
        ) : (
          <Moon />
        )}
        {/* <span className="mx-2 hidden lg:inline-block">{text.theme}</span> */}
      </button>
    </>
  )
}
