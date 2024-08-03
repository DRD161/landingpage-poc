import { useState, useEffect } from 'react';
import Nav from './components/Nav.tsx';
import MobileNav from './components/MobileNav.tsx';
// import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
// import About from './components/About.tsx';
import { navItems } from './data/data.ts';
// import { footerLinks } from './data/data.ts';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia('(max-width: 768px)').matches,
  );

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  });

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
