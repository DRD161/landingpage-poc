import { useState } from 'react';
import NavItem from '../components/NavItem';
import GetStartedCta from './GetStartedCta.jsx';

const Nav = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

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
