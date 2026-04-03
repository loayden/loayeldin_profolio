import Hero from '@/components/Hero-Loay';
import About from '@/components/About-Loay';
import Skills from '@/components/Skills-Loay';
import Competitions from '@/components/Competitions';
import Projects from '@/components/Projects-Loay';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact-Loay';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Competitions />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
