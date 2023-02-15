import React from "react";
import Navbar from "./navbar";
import Search from "./search";

function Header() {
  return (
    <header className="flex justify-between items-center my-5 mx-10">
      <span>LOGO</span>
      <Navbar />
      <Search />
    </header>
  );
}

export default Header;
