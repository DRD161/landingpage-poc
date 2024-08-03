import { forwardRef, KeyboardEvent } from 'react';
import { ColumnData } from '../types.ts';
import DropdownContent from './DropdownContent';

export interface NavItemProps {
  title: string;
  columnData: ColumnData;
  isActive: boolean;
  index: number;
  setActiveIndex: (index: number | null) => void;
  isMobile: boolean;
}

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ title, columnData, isActive, index, setActiveIndex, isMobile }, ref) => {
    const columns: ColumnData[] = new Array(3).fill(columnData); // create columns using columnData.

    const keyPressOpen = (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        setActiveIndex(index);
        document.body.classList.remove('no-scroll');
      }
    };

    const keyPressClose = (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        setActiveIndex(null);
        document.body.classList.remove('no-scroll');
      }
    };

    return (
      <>
        <a
          onMouseEnter={() => setActiveIndex(index)}
          onFocus={() => setActiveIndex(index)} // only need focus for desktop.
          onKeyDown={keyPressOpen} // allow dropdown to show when Enter or Space key is pressed.
          href="#"
          className={isActive ? 'nav-link nav-link-active' : 'nav-link'}
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="menu"
        >
          {title}
        </a>
        <div
          ref={ref}
          className={
            isActive ? 'dropdown-wrapper dropdown-visible' : 'dropdown-wrapper'
          }
        >
          <DropdownContent
            isMobile={isMobile}
            columns={columns}
            setActiveIndex={setActiveIndex}
            keyPressClose={keyPressClose}
          />
        </div>
      </>
    );
  },
);

export default NavItem;
