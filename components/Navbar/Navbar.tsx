import React from "react";
import { navBarData } from "./NavbarListItems";

const Navbar = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__ul">
        {navBarData.map((item, index) => (
          <li key={index} className="Nav__li">
            <a href={item.url} className="Nav__link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
