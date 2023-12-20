import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer
        aria-label="Site Footer"
        className="bg-zinc-100 dark:bg-zinc-900 mx-auto flex items-center justify-between p-7 m-0"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-start">
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-50 lg:mt-0">
              Made using Next.js and Tailwind CSS. Hosted on Vercel.
            </p>
          </div>

          <div>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-50 lg:mt-0">
              &copy; 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
