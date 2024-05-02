"use client";
import { Link, NavLink } from "react-router-dom";
import icon from "../assets/icon.png";
import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/team",
  },
];

export default function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full z-50 top-0 bg-blue-500  font-sans">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center space-x-2 ">
          <Link to="/" className="inline-flex items-center space-x-2">
            <img src={icon} style={{ height: 40, width: 40 }} alt="Logo" />
            <span className="font-bold text-white rounded-md px-3 py-2  font-open text-2xl mx-2">
              MedInsight
            </span>
          </Link>
        </div>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
          <ul className="ml-12 inline-flex  space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b  text-base font-medium ${
                    isActive ? "text-white" : "text-gray-900"
                  } lg:hover:bg-transparent  lg:border-0  hover:text-white lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b  text-base font-medium ${
                    isActive ? "text-white" : "text-gray-900"
                  } lg:hover:bg-transparent  lg:border-0  hover:text-white lg:p-0`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b  text-base font-medium ${
                    isActive ? "text-white" : "text-gray-900"
                  } lg:hover:bg-transparent  lg:border-0  hover:text-white lg:p-0`
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <Link
            to="/auth"
            className="rounded-md   bg-blue-300 px-3 py-2 text-sm font-semibold"
          >
            Log in
          </Link>
          <Link
            to="/"
            className="rounded-md  bg-blue-300 px-3 py-2 text-sm font-semibold"
          >
            Get started
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        src={icon}
                        style={{ height: 40, width: 40 }}
                        alt="Logo"
                      />
                    </span>
                    <span className="font-bold">MedInsight</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-1">
                  <Link to="/auth">
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-2"
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link to="/" >
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Get started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
