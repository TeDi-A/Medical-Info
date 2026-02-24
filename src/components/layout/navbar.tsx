"use client";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const PageNavigation = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  const handleThemeToggle = (checked: boolean) => {
    setIsChecked(checked);
    const theme = checked ? "business" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    themeChange(false);
    const currentTheme = localStorage.getItem("theme");
    setIsChecked(currentTheme === "business");
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() ?? 0);
    setScrollDirection(diff > 0 ? "down" : "up");
    console.log(scrollDirection);
  });

  return (
    <>
      <motion.div
        className="navbar bg-base-100 shadow-sm fixed top-0 z-10"
        animate={{
          y: scrollDirection === "down" ? -64 : 0,
        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            DivineMed
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-4">
          <label htmlFor="theme-toggle" className="flex items-center gap-2">
            <input
              id="theme-toggle"
              type="checkbox"
              className="toggle theme-controller"
              checked={isChecked}
              onChange={(e) => handleThemeToggle(e.target.checked)}
            />
            <span>Dark Mode</span>
          </label>
        </div>
      </motion.div>
    </>
  );
};

export default PageNavigation;
