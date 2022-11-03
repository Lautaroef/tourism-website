import { useEffect, useState } from "react";
import Link from "next/link";
import DropdownLanguage from "./DropdownLanguage";
import DropdownMenu from "./DropdownMenu";
import UseWindowSize from "../../utils/functions/UseWindowSize";
import Weather from "./weather/Weather";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function FirstNavbar({ links }: { links: NavLink }) {
  const innerWidth = UseWindowSize();
  const [distanceToTop, setDistanceToTop] = useState(0);
  const [dropdownLanguage, setDropdownLanguage] = useState(false);
  const [isHambMenuImgShown, setIsHambMenuImgShown] = useState(false);

  // Function to enlarge the header if window.scrollY == 0
  const handleScroll = () => {
    const position = window.pageYOffset;
    setDistanceToTop(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }); // passive: true to prevent performance issues

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          distanceToTop === 0 ? "md:py-8 py-4" : "lg:py-2 py-1.5"
        } customFirstNav mx-auto lg:px-8 tablets:px-4 lg:max-w-6xl flex flex-1 justify-between items-center bg-firstNav`}
      >
        <Link href="/">
          <img
            src="https://www.barlantravel.com/images/logo-white.png"
            width={200}
            height={100}
            alt="Lausof.com"
            className={`${
              distanceToTop === 0 ? "lg:w-44 md:w-40" : "lg:w-40 md:w-36"
            } customFirstNav smMd:w-28 w-24 pl-2 py-1`}
          />
        </Link>
        <ul className="flex tablets:gap-x-3 smMd:gap-x-1 items-center lg:text-md text-xs font-medium">
          {/* Display Weather API */}
          <Weather />
          <li>
            <a href="tel: +543875380900" className="firstNavbar-styles">
              <BsFillTelephoneFill className="text-base" />
              <p className="tablets:block hidden">CALL US</p>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+543875380900"
              target="_blank"
              className="firstNavbar-styles"
            >
              <BsWhatsapp className="text-base" />
              <p className="tablets:block hidden">WHATSAPP</p>
            </a>
          </li>
          <li className="relative" onClick={() => setDropdownLanguage(!dropdownLanguage)}>
            {dropdownLanguage && <DropdownLanguage />}
            <a href="#" className="customList firstNavbar-styles">
              <IoEarthSharp className="text-base sm:block hidden" />
              <p className="text-xs">English</p>
              <RiArrowDownSFill />
            </a>
          </li>
          <li className="firstNavbar-styles">
            <p className="text-xs">AR$</p>
          </li>
          <li className="firstNavbar-styles">
            <FaShoppingCart className="text-base" />
            <p className="tablets:block hidden">CART</p>
          </li>
          <li
            className="block tablets:hidden sm:w-11"
            onClick={() => setIsHambMenuImgShown(!isHambMenuImgShown)}
          >
            {isHambMenuImgShown ? (
              <ImCross className="text-base mx-2 cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-lg mx-2 cursor-pointer" />
            )}
          </li>
        </ul>
      </nav>
      {innerWidth && innerWidth < 780 && isHambMenuImgShown && (
        <DropdownMenu
          links={links}
          hideDropdown={() => setIsHambMenuImgShown(!isHambMenuImgShown)}
        />
      )}
    </>
  );
}

export default FirstNavbar;
