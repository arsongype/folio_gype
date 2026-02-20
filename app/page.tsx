import Hero from "./components/Home/Hero/Hero"
import Services from "./components/Services/Services"
import Skills from "./components/Skills/Skills"
import Competances from "./components/Competances/Competances"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Hero/>
      <Services />
      <Skills />
      <Competances />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
