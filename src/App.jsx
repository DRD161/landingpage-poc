import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import { navItems } from './data/data.ts';
import { footerLinks } from './data/data.ts';

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
