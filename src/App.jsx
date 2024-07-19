import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import { navItems } from './data/data.js';
import { footerLinks } from './data/data.js';

function App() {
  return (
    <>
      <Nav items={navItems} />
      <Hero header="Dream something." subHeader="Build something." />
      <About
        header="About Us"
        text="Lorem enim sed dignissim arcu leo mauris fermentum arcu sed. Vitae senectus."
      />
      <Footer links={footerLinks} />
    </>
  );
}

export default App;
