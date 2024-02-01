import React from "react";
import { Link } from "react-router-dom";

const NavComponents = () => {
  return (
    <div>
      <nav className="w-full fixed left-0 right-0 z-50 md:w-4/5 px-3 md:px-0 mx-auto py-4 flex justify-between shadow-lg bg-white">
        <h1>Logo</h1>
        <Link to={"/"}>
          <p>Menu</p>
          </Link>
      </nav>
      {/* <div id="headerSpacer" className="h-20" bis_skin_checked="1"></div> */}
    </div>
  );
};

export default NavComponents;
