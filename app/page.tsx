import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Objectives from './component/objectives';
import Contact from './component/contact';
import Footer from './component/footer';
import Anthem from './component/anthem';
import NationalExco from './component/nationalexco';
import PastPresidents from './component/pastpresidents';
import Constitution from './component/constitution';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Anthem />
      <Constitution />
      <NationalExco />
      <PastPresidents />
      <Contact />
      <Footer />
    </>
  );
}
