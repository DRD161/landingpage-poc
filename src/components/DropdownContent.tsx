import { Fragment, KeyboardEvent } from 'react';
import { ColumnData, Item } from '../types.ts';

export interface NavItemProps {
  title: string;
  columnData: ColumnData;
  index: number;
  setActiveIndex: (index: number | null) => void;
  isMobile: boolean;
}

const DropdownContent = ({
  isMobile,
  columns,
  setActiveIndex,
  keyPressClose,
}: {
  isMobile: boolean;
  columns: ColumnData[];
  setActiveIndex: (index: number | null) => void;
  keyPressClose: (event: KeyboardEvent<HTMLElement>) => void;
}) => {
  return (
    <div className="dropdown-menu TEST" role="menu">
      {isMobile && (
        <a
          className="back-btn"
          href="#"
          onClick={() => setActiveIndex(null)}
          onKeyDown={keyPressClose}
          role="menuitem"
        >
          Back
        </a>
      )}
      {columns.map((column: ColumnData, index: number) => (
        <Fragment key={index}>
          <div className="dropdown-column">
            <h3 className="dropdown-header">{column.header}</h3>
            <img
              src={column.image}
              alt={column.header}
              className="dropdown-image"
            />
            <div className="dropdown-items">
              {column.items.map((item: Item, index: number) => (
                <a
                  href={item.href}
                  key={index}
                  className="dropdown-link"
                  role="menuitem"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <hr />
            <a
              href={column.link.href}
              className="dropdown-bottom-link"
              role="menuitem"
            >
              {column.link.name}
            </a>
          </div>
          {!isMobile && <div className="dropdown-divider"></div>}
        </Fragment>
      ))}
    </div>
  );
};

export default DropdownContent;
