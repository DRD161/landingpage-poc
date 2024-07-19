export interface Item {
  name: string;
  href: string;
}

export interface Link {
  name: string;
  href: string;
}

export interface ColumnData {
  header: string;
  image: string;
  items: Item[];
  link: Link;
}

export interface NavItem {
  title: string;
  columnData: ColumnData;
}

export interface FooterLinks {
  topLinks: string[];
  utilityLinks: string[];
}
