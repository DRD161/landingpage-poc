import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import NavItem from '../components/NavItem';
import GetStartedCta from './GetStartedCta.tsx';
import { NavItemData } from '../types.ts';

interface MobileNavProps {
  items: NavItemData[];
}

const MobileNav = ({ items }: MobileNavProps) => {
  const [toggled, setToggled] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const dropdownRefs = useRef<HTMLDivElement[]>([]);

  const toggleNav = () => {
    setToggled((prev: boolean) => !prev);
    document.body.classList.toggle('no-scroll', !toggled);
    removeDropdownClass(); // When menu is closed remove 'dropdown-visible' class to ensure dropdown is closed when reopening the menu.
    setActiveIndex(null); // When menu is closed remove 'nav-link-active' class.
  };

  const keyPressClose = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setToggled(false);
      document.body.classList.remove('no-scroll');
    }
  };

  const removeDropdownClass = () => {
    dropdownRefs.current.forEach((el) => {
      if (el.classList.contains('dropdown-visible')) {
        el.classList.remove('dropdown-visible');
      }
    });
  };

  const setDropdownRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      dropdownRefs.current[index] = el;
    }
  };

  // Ensures the 'no-scroll' class is removed on render
  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <header>
      <nav
        className="nav nav--mobile"
        onKeyUp={keyPressClose}
        onMouseLeave={() => setActiveIndex(null)}
      >
        <button
          type="button"
          className="nav-btn"
          aria-label="menu"
          onClick={toggleNav}
        >
          <span
            className={`nav-btn__bar block ${toggled ? 'rotate-top-bar' : 'reset-top-bar'}`}
          ></span>
          <span
            className={`nav-btn__bar nav-btn__bar--center ${toggled ? 'hide' : 'show'}`}
          ></span>
          <span
            className={`nav-btn__bar block ${toggled ? 'rotate-bottom-bar' : 'reset-bottom-bar'}`}
          ></span>
        </button>
        <div
          className={`nav-menu ${toggled ? 'show-nav-menu' : 'hide-nav-menu'}`}
          onKeyUp={keyPressClose}
        >
          <div className="nav-items">
            {items.map((item: NavItemData, index: number) => (
              <NavItem
                key={index}
                title={item.title}
                columnData={item.columnData}
                isActive={activeIndex === index}
                index={index}
                setActiveIndex={setActiveIndex}
                isMobile={true}
                ref={(el) => setDropdownRef(el, index)}
              />
            ))}
            <GetStartedCta text="Get Started" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
