"use client";
import React from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/solid";

const BreadCrumb = () => {
  return (
    <div>
      <nav aria-label="Breadcrumb" className="flex">
        <ol
          role="list"
          className="flex overflow-hidden bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md rounded-r-xl "
        >
          <li className="flex items-center">
            <Link
              href=""
              className="flex h-10 items-center gap-1.5 bg-zinc-500 px-4 transition hover:text-zinc-100 dark:bg-zinc-600 dark:hover:text-zinc-500"
            >
              <HomeIcon className="w-4 h-4 items-center" />

              <span className="text-xs font-medium"> Home </span>
            </Link>
          </li>

          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -left-px h-10 w-4 bg-zinc-500 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] dark:bg-zinc-600"></span>

            <Link
              href="/projects"
              className="flex h-10 items-center bg-zinc-300 pl-8 pr-4 text-xs font-medium transition hover:text-zinc-100 dark:bg-zinc-800  dark:hover:text-zinc-500"
            >
              Projects
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
