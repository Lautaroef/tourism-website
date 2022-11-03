import Link from "next/link";

function Dropdown({ links, hideDropdown }: NavItem) {
  return (
    <nav
      className={`transitionProperty z-0 w-full bg-toggleBgColor text-sm font-medium text-toggleTextColor`}
    >
      <ul className="flex flex-col" onClick={hideDropdown}>
        {links.map((item: { href: string; label: string }, index: number) => {
          return (
            <Link href={item.href} key={index}>
              <li className=" w-full pl-6 transition duration-400 border-b border-toggleBorderBottom cursor-pointer py-2.5 hover:text-secondNav hover:bg-toggleHoverBg">
                {item.label}
              </li>
            </Link>
          );
        })}
        <Link href="/contact">
          <li className="w-full pl-6 transition duration-400 border-b border-toggleBorderBottom cursor-pointer py-2.5 hover:text-secondNav hover:bg-toggleHoverBg">
            CONTACT
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Dropdown;
