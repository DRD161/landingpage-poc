import { useRef } from 'react';
import useIntersection from '../hooks/useIntersection.ts';

interface HeroProps {
  header: string;
  subHeader: string;
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const Hero = ({ header, subHeader }: HeroProps) => {
  const targetRef = useRef<HTMLHeadingElement | null>(null);
  const isVisible = useIntersection(targetRef, options);

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
