import { useState, lazy, Suspense, useRef, useContext } from 'react'
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
    <div>
      <section ref={containerHome} title="home">
        <Home />
      </section>

      <Header />
      <main className="bg-zinc-300 dark:bg-zinc-800">
        <section ref={containerAbout} data-title="about" title="about">
          <Suspense fallback={<p>hola</p>}>
            <About />
          </Suspense>
        </section>
        <section ref={containerProjects} title="projects">
          <Suspense fallback={<p> </p>}>
            <Projects />
          </Suspense>
        </section>
      </main>
      <footer ref={containerFooter} title="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default Port
