import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Objectives from './component/objectives';
import Contact from './component/contact';
import Footer from './component/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Contact />
      <Footer />
    </>
  );
}
