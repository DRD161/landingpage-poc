import { useState } from 'react';
import NavItem, { NavItemProps } from '../components/NavItem';
import GetStartedCta from './GetStartedCta.tsx';

interface ItemsProps {
  items: NavItemProps[];
}

const Nav = ({ items }: ItemsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className="nav" onMouseLeave={() => setActiveIndex(null)}>
      <div className="nav-items">
        {items.map((item, index) => (
          <NavItem
            key={index}
            title={item.title}
            columnData={item.columnData}
            isActive={activeIndex === index}
            setActiveIndex={setActiveIndex}
            index={index}
          />
        ))}
      </div>
      <GetStartedCta text="Get Started" />
    </nav>
  );
};
export default Nav;
