import { useState, useEffect, useContext } from 'react'
import Sun from '../../icons/Sun'
import Moon from '../../icons/Moon'
import TranslationContext from '../../TraslationContext'

export default function Theme() {
  const { text } = useContext(TranslationContext)
  const [bool, setBool] = useState(false)
  const init = localStorage.theme
    ? localStorage.theme
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'os'
    : 'light'
  const [select, setSelect] = useState(init)

  function handleClick(e) {
    e.preventDefault()
    setBool(!bool)
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
  }, [select])

  return (
    <>
      <div className="relative text-slate-200 ">
        <button
          className="bg-zinc-900 rounded-2xl px-2 hover:scale-105 transition-all duration-300 h-8 border-2 border-cyan-700 z-30 "
          onClick={handleClick}
        >
          {select === 'os' ? (
            <span className="text-cyan-400">OS</span>
          ) : select === 'light' ? (
            <Sun />
          ) : (
            <Moon />
          )}
          <span className="mx-2 hidden md:inline-block">{text.theme}</span>
        </button>
        <ul
          className={`${
            !bool ? 'scale-0' : 'scale-100'
          } transition-all duration-300 origin-top-left bg-slate-800 dark:bg-zinc-900 p-2 rounded-md text-base border-2 border-slate-400 `}
        >
          <li>
            <button
              className="dark:bg-zinc-900  bg-slate-800 px-2 py-1 mt-1 rounded-xl border-2 w-[100%] border-cyan-700"
              onClick={() => setSelect('os')}
            >
              <span className="text-cyan-400 mr-2">OS</span>
              {text.default}
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelect('light')}
              className="dark:bg-zinc-900 bg-slate-800  px-2 py-1 mt-1 rounded-xl border-2 w-[100%] border-cyan-700"
            >
              <Sun /> <span>{text.light}</span>
            </button>
          </li>
          <li>
            <button
              className="dark:bg-zinc-900  bg-slate-800 px-2 py-1 mt-1 rounded-xl border-2 w-[100%] border-cyan-700"
              onClick={() => setSelect('dark')}
            >
              <Moon /> <span>{text.dark}</span>
            </button>
          </li>
        </ul>
      </div>

      {bool && (
        <div
          className="h-[100vh] w-[100vw] -ml-10 top-0 -z-10 absolute"
          onClick={handleClick}
        ></div>
      )}
    </>
  )
}
