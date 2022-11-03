type Place = {
  name: string;
  rate: number;
  xid: string;
};

type NavLink = { href: string; label: string }[];

type NavItem = {
  links: NavLink;
  hideDropdown: () => void;
};
