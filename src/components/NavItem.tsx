import { ColumnData } from '../types.ts';

export interface NavItemProps {
  title: string;
  columnData: ColumnData;
  isActive: boolean;
  index: number;
  setActiveIndex: (index: number) => void;
}

const NavItem = ({
  title,
  columnData,
  isActive,
  setActiveIndex,
  index,
}: NavItemProps) => {
  const columns: ColumnData[] = new Array(3).fill(columnData); // create columns using columnData

  return (
    <>
      <a
        onMouseEnter={() => setActiveIndex(index)}
        onFocus={() => setActiveIndex(index)}
        href="#"
        className={isActive ? 'nav-link nav-link-active' : 'nav-link'}
      >
        {title}
      </a>
      {isActive && (
        <div className="dropdown-wrapper">
          <div className="dropdown-menu">
            {columns.map((column, index) => (
              <>
                <div key={index}>
                  <div className="dropdown-column" key={index}>
                    <h3 className="dropdown-header">{column.header}</h3>
                    <img
                      src={column.image}
                      alt={column.header}
                      className="dropdown-image"
                    />
                    <div className="dropdown-items">
                      {column.items.map((item, index) => (
                        <a
                          href={item.href}
                          key={index}
                          className="dropdown-link"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <hr />
                    <a href={column.link.href} className="dropdown-bottom-link">
                      {column.link.name}
                    </a>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItem;
