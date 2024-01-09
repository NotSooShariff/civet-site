"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isElementHidden, setElementHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setElementHidden(true);
      } else {
        setElementHidden(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {!isElementHidden && (
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="/civet-logo.png"
                class="h-8"
                alt="Website Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Civet
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white md:dark:text-purple-500"
                    aria-current="page"
                  >
                    Buy Now!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Chart
                  </a>
                </li>
              </ul>
            </div>
          </div>
      )}
    </div>
  );
};

export default Navbar;
