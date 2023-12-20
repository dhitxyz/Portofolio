"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import DarkMode from "./darkMode";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { usePathname } from "next/navigation";

function Navbar() {
  // Ketika Klick diluar Burger Button akan menutup burger button
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  const closeMenu = () => {
    setIsOpen(false);
  };
  // Akhir Ketika Klick diluar Burger Button akan menutup burger button

  // Fixed Nav When Scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `top-0 w-full ${
    isScrolled
      ? "fixed bg-zinc-100 dark:bg-zinc-900 bg-opacity-50 dark:bg-opacity-50 z-10"
      : "bg-zinc-100 dark:bg-zinc-900"
  }`;

  // styles for active and non-active links
  const activeStyle =
    "after:text-black font-bold after:rounded-sm after:bg-blue-300 after:inline-block after:content after:mb-7 after:h-1 after:w-full after:scale-100";
  const nonActiveStyle = "text-gray-700 hover:text-gray-500";

  const activeStyle2 =
    "after:text-black font-bold after:rounded-sm after:bg-blue-300 after:inline-block underline underline-offset-8 decoration-2";
  const nonActiveStyle2 = "text-gray-700 hover:text-gray-500";

  const currentRoute = usePathname();

  // End Fixed Nav When Scroll

  return (
    <header aria-label="Site Header" className={`${navClasses}`}>
      <div className="mx-auto max-w-screen-xl p-4 ">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1 font-righteous">
            <Link href="/">kadekPanjii .</Link>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <Link
              href="/"
              className={currentRoute === "/" ? activeStyle : nonActiveStyle}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={
                currentRoute === "/projects" ? activeStyle : nonActiveStyle
              }
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={
                currentRoute === "/about" ? activeStyle : nonActiveStyle
              }
            >
              About
            </Link>
          </nav>

          <div className="animate__animated animate__shakeY flex-1 items-center justify-end gap-4 flex ">
            <DarkMode />
          </div>

          {/* NAVBAR MODE HP */}
          <div ref={menuRef}>
            <button
              className="block md:hidden dark:text-white text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            {isOpen && (
              <div
                className="absolute right-0 top-14 backdrop-blur-sm bg-zinc-200/20 dark:bg-zinc-800/20 w-screen h-screen  z-50"
                onClick={closeMenu}
              >
                <div className="w-60 h-screen right-0 top-14 bg-zinc-200 dark:bg-zinc-800">
                  <div className="justify-between top-0 flex flex-col h-screen">
                    {/* bagian atas nav */}
                    <ul className="text-center mt-8">
                      <li className="mb-8">
                        <Link
                          href="/"
                          className={
                            currentRoute === "/"
                              ? activeStyle2
                              : nonActiveStyle2
                          }
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mb-8">
                        <Link
                          href="/projects"
                          className={
                            currentRoute === "/projects"
                              ? activeStyle2
                              : nonActiveStyle2
                          }
                        >
                          Projects
                        </Link>
                      </li>
                      <li className="mb-8">
                        <Link
                          href="/about"
                          className={
                            currentRoute === "/about"
                              ? activeStyle2
                              : nonActiveStyle2
                          }
                        >
                          About
                        </Link>
                      </li>
                    </ul>

                    {/* bagian atas nav */}
                    {/* bagian tengah nav */}

                    <div className="m-auto top-0 w-32 flex-col gap-2">
                      <Link
                        className="w-full mb-2 inline-flex justify-center gap-2 rounded bg-[#171515] dark:bg-white px-5 py-3 text-sm font-medium text-white dark:text-[#171515] hover:bg-[#353232] dark:hover:bg-zinc-300"
                        href="https://github.com/KadekPanjiii"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            cli="evenodd"
                          ></path>
                        </svg>
                      </Link>
                      <Link
                        className="w-full text-center mb-2 inline-flex justify-center gap-2 rounded bg-[#171515] dark:bg-white px-5 py-3 text-sm font-medium text-white dark:text-[#171515] hover:bg-[#353232] dark:hover:bg-zinc-300"
                        href="https://www.instagram.com/kadekpanjiii_/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"
                            cli="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* bagian tengah nav */}
                    {/* bagian bawah nav */}

                    <div>
                      <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-50 lg:mt-0">
                        &copy; 2023. All rights reserved.
                      </p>
                    </div>
                    {/* bagian bawah nav */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
