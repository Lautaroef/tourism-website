import React from "react";
import { Link } from "react-router-dom";

function SecondNavbar({ links }) {
  return (
    <nav className="hidden tablets:flex justify-between items-center max-w-7xl md:max-w-5xl text-white mx-auto tablets:px-6">
      <ul className="flex gap-x-2.5 lg:text-tiny text-xs">
        {links.map((item, index) => {
          return (
            <Link
              to={item.to}
              className="lg:px-3 transition duration-700 tablets:px-2 sm:px-1 lg:py-3.5 py-2.5 hover:bg-secondNav"
              key={index}
            >
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
      <Link href="/Contact">
        <li className="customContact transition duration-700 list-none tablets:px-2 sm:px-1 lg:py-3.5 py-2.5 text-tiny hover:bg-secondNav">
          CONTACT
        </li>
      </Link>
    </nav>
  );
}

export default SecondNavbar;
