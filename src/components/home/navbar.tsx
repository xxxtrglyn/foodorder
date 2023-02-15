import React from "react";
import { Menu2 } from "tabler-icons-react";

function Navbar() {
  return (
    <nav>
      <div className="peer sm:hidden cursor-pointer">
        <Menu2 />
      </div>
      <ul className="hidden peer-hover:block peer-hover:absolute sm:flex font-montserrat gap-7 sm:justify-center transition-all">
        <li className="group cursor-pointer">
          <a href="/" className="group-hover:border-b-2 border-black">
            Home
          </a>
        </li>
        <li className="group cursor-pointer">
          <a href="/" className="group-hover:border-b-2 border-black">
            Menu
          </a>
        </li>
        <li className="group cursor-pointer">
          <a href="/" className="group-hover:border-b-2 border-black">
            Service
          </a>
        </li>
        <li className="group cursor-pointer">
          <a href="/" className="group-hover:border-b-2 border-black">
            Shop
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
