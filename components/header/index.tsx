import React from "react";
import FirstNavbar from "./FirstNavbar";
import SecondNavbar from "./SecondNavbar";

function Header() {
  const secondNavbarLinks: NavLink = [
    { label: "HOME", href: "/" },
    { label: "PACKAGES", href: "#" },
    { label: "ACTIVITIES", href: "#" },
    { label: "TRANSFERS", href: "#" },
    { label: "RENT A CAR", href: "#" },
    { label: "NEWS", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "ABOUT US", href: "/about" },
  ];

  return (
    <header className="z-20 2xl:sticky sticky top-0 flex flex-col w-full mx-auto font-Poppins">
      <div className="relative w-full text-white bg-firstNav">
        <FirstNavbar links={secondNavbarLinks} />
      </div>
      <div className="w-full customSecondNav">
        <SecondNavbar links={secondNavbarLinks} />
      </div>
    </header>
  );
}

export default Header;
