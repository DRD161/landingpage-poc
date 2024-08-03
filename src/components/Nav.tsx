import { useState } from 'react';
import NavItem from '../components/NavItem';
import GetStartedCta from './GetStartedCta.tsx';
import { NavItemData } from '../types.ts';

interface ItemsProps {
  items: NavItemData[];
}

const Nav = ({ items }: ItemsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <header>
      <nav className="nav" onMouseLeave={() => setActiveIndex(null)}>
        <div className="nav-items">
          {items.map((item: NavItemData, index: number) => (
            <NavItem
              key={index}
              title={item.title}
              columnData={item.columnData}
              isActive={activeIndex === index}
              setActiveIndex={setActiveIndex}
              index={index}
              isMobile={false}
            />
          ))}
        </div>
        <GetStartedCta text="Get Started" />
      </nav>
    </header>
  );
};
export default Nav;
