import Nav from './components/Nav.tsx';
import MobileNav from './components/MobileNav.tsx';
// import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
// import About from './components/About.tsx';
import { navItems } from './data/data.ts';
// import { footerLinks } from './data/data.ts';
import useMatchMedia from './hooks/useMatchMedia';

function App() {
  const isMobile = useMatchMedia('(max-width: 768px)');

  return (
    <>
      {isMobile && <MobileNav items={navItems} />}
      {!isMobile && <Nav items={navItems} />}
      <Hero header="Dream something." subHeader="Build something." />
      {/*<About*/}
      {/*  header="About Us"*/}
      {/*  text="Lorem enim sed dignissim arcu leo mauris fermentum arcu sed. Vitae senectus."*/}
      {/*/>*/}
      {/*<Footer links={footerLinks} />*/}
    </>
  );
}

export default App;
