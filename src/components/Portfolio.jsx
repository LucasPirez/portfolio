import { lazy, Suspense, useRef, useContext } from 'react'
import Home from './Home/Home'
import Header from './About/Header'
import TranslationContext from '../TraslationContext'
import Footer from './Footer/Footer'
import { useInsertionEffect } from '../hooks/useIntersection'

const About = lazy(() => import('./About/About'))
const Projects = lazy(() => import('./projects/Projects'))

const Port = () => {
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
    <>
      <section ref={containerHome} title="home">
        <Home />
      </section>

      <Header />
      <main className="bg-zinc-300 dark:bg-zinc-800">
        <section ref={containerProjects} title="projects">
          <Suspense fallback={<p> </p>}>
            <Projects />
          </Suspense>
        </section>
        <section ref={containerAbout} title="about">
          <Suspense fallback={<p></p>}>
            <About />
          </Suspense>
        </section>
      </main>
      <footer ref={containerFooter} title="footer">
        <Footer />
      </footer>
    </>
  )
}

export default Port
