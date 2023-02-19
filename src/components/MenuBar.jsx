import React from "react";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";

// type Props = {};

const MenuBar = () => {
  return (
    <div className="navbar fixed w-screen bg-opacity-0">
      <div className="dropdown navbar-start dropdown-hover">
        <label tabIndex={0} className="btn-ghost btn normal-case">
          Menu
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href={"#home"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggler />
      </div>
    </div>
  );
};

// const MenuBar2 = () => {
//   return (
//     <div className="navbar w-screen bg-opacity-0">
//       <div className="flex-1">
//         <a className="btn-ghost btn normal-case">Chester Cari 🍜</a>
//       </div>

//       <div className="dropdown">
//         <label tabIndex={0} className="btn-ghost btn lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h8m-8 6h16"
//             />
//           </svg>
//         </label>
//         <ul
//           tabIndex={0}
//           className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
//         >
//           <li>
//             <a>Item 1</a>
//           </li>
//           <li>
//             <a>Item 3</a>
//           </li>
//         </ul>
//       </div>

//       <div className="flex-none">
//         <ThemeToggler />
//       </div>
//     </div>
//   );
// };

export default MenuBar;