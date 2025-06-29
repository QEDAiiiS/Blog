"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <header className="max-w-6xl mx-auto px-4 transition-all duration-300">
        <nav className=" container mx-auto">
          <div className=" mx-auto flex justify-between min-h-14 items-center ">
            <div className="text-xl font-bold">
              <h1>Mahmoud Qedais</h1>
            </div>

            <ul
              className={`
                gap-4 text-lg transition-all duration-300 z-40 md:bg-transparent
                ${
                  menuState
                    ? "flex flex-col fixed top-0 right-0 h-full w-64 p-6 bg-gray-800"
                    : "hidden"
                }
                md:flex md:flex-row md:static md:h-auto md:w-auto md:p-0 items-center
              `}
            >
              <li className="md:hidden text-2xl font-bold">Mahmoud Qedais</li>
              <li>Blog</li>
              <li>Projects</li>
              <li>About</li>
              <li>Newsletter</li>
              <li>
                <ThemeToggle />
              </li>
            <button className="md:hidden mt-36"
            onClick={()=>setMenuState(false)}>
              <IoClose className=" size-8 text-center" />
            </button>
            </ul>


            <button
              className="md:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              <IoMenu className="  size-8 " />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
