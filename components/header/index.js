import React from "react";
import FirstNavbar from "./FirstNavbar";
import SecondNavbar from "./SecondNavbar";

function Header() {
  const secondNavbarLinks = [
    { title: "HOME", to: "/" },
    { title: "PACKAGES", to: "#" },
    { title: "ACTIVITIES", to: "#" },
    { title: "TRANSFERS", to: "#" },
    { title: "RENT A CAR", to: "#" },
    { title: "NEWS", to: "#" },
    { title: "FAQ", to: "#" },
    { title: "ABOUT US", to: "/About" },
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
