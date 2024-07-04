import React from "react";

const navData = [
  { name: "About", url: "bio" },
  { name: "Work", url: "work" },
  { name: "Contact", url: "contact" },
];

const Navbar = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__ul">
        {navData.map((items, index) => (
          <li key={index} className="Nav__li">
            <a href={items.url} className="Nav__link">
              {items.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
