import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ links, hideDropdown }) {
  return (
    <nav
      className={`transitionProperty z-0 w-full bg-toggleBgColor text-sm font-medium text-toggleTextColor`}
    >
      <ul className="flex flex-col" onClick={hideDropdown}>
        {links.map((item, index) => {
          return (
            <Link to={item.to} key={index}>
              <li className=" w-full pl-6 transition duration-400 border-b border-toggleBorderBottom cursor-pointer py-2.5 hover:text-secondNav hover:bg-toggleHoverBg">
                {item.title}
              </li>
            </Link>
          );
        })}
        <Link to="/Contact">
          <li className="w-full pl-6 transition duration-400 border-b border-toggleBorderBottom cursor-pointer py-2.5 hover:text-secondNav hover:bg-toggleHoverBg">
            CONTACT
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Dropdown;
