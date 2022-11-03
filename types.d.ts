type Place = {
  name: string;
  rate: number;
  xid: string;
  icon: string;
  main: string;
  description: string;
  temperature: number;
  feelsLike: number;
};

type NavLink = { href: string; label: string }[];

type NavItem = {
  links: NavLink;
  hideDropdown: () => void;
};
