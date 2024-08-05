import { useState, useEffect, MutableRefObject } from 'react';

const useIntersection = (
  ref: MutableRefObject<HTMLElement | null>,
  options: object,
) => {
  // const targetRef = useRef<HTMLElement>(ref);
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const refElement = ref.current;
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting && refElement) {
          observer.unobserve(refElement);
        }
      },
      options,
    );
    if (refElement) {
      observer.observe(refElement);
    }

    return (): void => {
      if (refElement) {
        observer.unobserve(refElement);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useIntersection;
