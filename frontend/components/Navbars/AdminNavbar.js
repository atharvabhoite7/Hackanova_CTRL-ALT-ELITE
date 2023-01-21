import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar({ title, image }) {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            {title}
          </a>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <div className="items-center flex text-white mr-6 font-bold hover:text-gray-400 transition-all">
              <a href="/api/auth/signout">LOG OUT</a>
            </div>
            <div className="items-center flex text-white">
              <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                <img
                  alt="..."
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src={image}
                />
              </span>
            </div>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
