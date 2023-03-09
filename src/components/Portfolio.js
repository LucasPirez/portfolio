import { useState, useEffect, lazy, Suspense, useRef, useContext } from 'react'
// import About from "./About/About";
import Projects from './projects/Projects'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Header from './About/Header'
import TranslationContext from '../TraslationContext'

const About = lazy(() => import('./About/About'))

const Port = () => {
  const [nav, setNav] = useState(false)
  const [navName, setNavName] = useState('home')
  const { selectCurrentPage } = useContext(TranslationContext)

  const containerAbout = useRef()
  const containerHome = useRef()
  const containerProjects = useRef()
  const containerFooter = useRef()

  const arrayContainers = [
    containerAbout,
    containerFooter,
    containerHome,
    containerProjects
  ]

  const [visible, setVisible] = useState(false)

  const callBack = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        selectCurrentPage(entry.target.title)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    })
    arrayContainers.forEach((container) => {
      if (container.current) {
        observer.observe(container.current)
      }
    })

    return () => {
      arrayContainers.forEach((container) => {
        if (container.current) {
          observer.unobserve(container.current)
        }
      })
    }
  }, [visible])
  return (
    <div
      className="scroll-smooth"
      onClick={() => (nav === true ? setNav(false) : '')}
    >
      {/* <div className="w-full h-3 bg-transparent absolute "></div> */}
      <div ref={containerHome} title="home">
        <Home setNavName={setNavName} navName={navName} />
      </div>

      <Header nav={nav} setNav={setNav} />
      <div className="bg-zinc-300 dark:bg-zinc-800 ">
        <div ref={containerAbout} title="about">
          <Suspense fallback={<p>hola</p>}>
            <About />
          </Suspense>
        </div>
        <div ref={containerProjects} title="projects">
          <Projects setNavName={setNavName} />
        </div>
      </div>
      <div ref={containerFooter} title="footer">
        <Footer setNavName={setNavName} />
      </div>
    </div>
  )
}

export default Port
