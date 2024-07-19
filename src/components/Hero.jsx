import { useState, useEffect, useRef } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const Hero = ({ header, subHeader }) => {
  const targetRef = useRef(null);

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(targetRef.current);
      }
    }, options);
    observer.observe(targetRef.current);
  }, []);

  return (
    <section className={isVisible ? 'hero background-shift' : 'hero'}>
      <div className="text-wrapper">
        <h1 className={isVisible ? 'hero-header shift-up' : 'hero-header'}>
          {header}
        </h1>
      </div>
      <h2
        className={
          isVisible ? 'hero-subheader entered' : 'hero-subheader fade-on-scroll'
        }
        ref={targetRef}
      >
        {subHeader}
      </h2>
    </section>
  );
};
export default Hero;
