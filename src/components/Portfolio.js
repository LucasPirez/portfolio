import { useState, lazy, Suspense, useRef, useContext } from 'react'
import Home from './Home/Home'
import Header from './About/Header'
import TranslationContext from '../TraslationContext'
import Footer from './Footer/Footer'
import { useInsertionEffect } from '../hooks/useIntersection'

const About = lazy(() => import('./About/About'))
const Projects = lazy(() => import('./projects/Projects'))

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

  useInsertionEffect(arrayContainers, selectCurrentPage)

  return (
    <div
      // className="scroll-smooth"
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
          <Suspense fallback={<p> </p>}>
            <Projects setNavName={setNavName} />
          </Suspense>
        </div>
      </div>
      <div ref={containerFooter} title="footer">
        <Footer setNavName={setNavName} />
      </div>
    </div>
  )
}

export default Port
