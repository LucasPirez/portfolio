import { lazy, Suspense, useRef } from 'react';
import Home from './Home/Home';
import Header from './About/Header';
import { useTranslation } from '../TraslationContext';
import Footer from './Footer/Footer';
import FloatingAIChat from './QASection/FloatingAIChat';
import { useInsertionEffect } from '../hooks/useIntersection';

const About = lazy(() => import('./About/About'));
const Projects = lazy(() => import('./projects/Projects'));

const Port = () => {
  const { selectCurrentPage } = useTranslation();

  const containerAbout = useRef<HTMLElement>(null);
  const containerHome = useRef<HTMLElement>(null);
  const containerProjects = useRef<HTMLElement>(null);
  const containerFooter = useRef<HTMLElement>(null);

  const arrayContainers = [
    containerAbout,
    containerFooter,
    containerHome,
    containerProjects,
  ];

  useInsertionEffect(arrayContainers, selectCurrentPage);

  return (
    <>
      <section ref={containerHome} title="home">
        <Home />
      </section>

      <Header />
      <main className="background_black bg-myBgLight  dark:bg-myBgDark">
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

      <FloatingAIChat />
    </>
  );
};

export default Port;
