import React from "react";
import ThemeToggler from "./theme-toggler";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className="navbar fixed w-screen">
      <div className="dropdown-hover dropdown navbar-start">
        <label tabIndex={0} className="btn-ghost btn normal-case">
          Menu
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact w-52 bg-white bg-opacity-20"
        >
          <li>
            <Link href={"/#home"} scroll={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/#about"} scroll={false}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/#projects"} scroll={false}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggler />
      </div>
    </div>
  );
};
export default MenuBar;
