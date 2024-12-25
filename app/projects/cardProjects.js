import React, { useState } from "react";
import { Projects } from "./dataProjects";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/solid";
import "animate.css";

const CardProjects = () => {
  const [selectedBahasa, setSelectedBahasa] = useState([]);
  const [selectedTool, setSelectedTool] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("web"); // Changed default to "web"

  const filteredProjects = Projects.filter((project) => {
    // First filter by category
    if (project.category !== selectedCategory) {
      return false;
    }

    // Then filter by bahasa and tools
    if (selectedBahasa.length === 0 && selectedTool.length === 0) {
      return true;
    } else {
      const bahasaMatch = selectedBahasa.some((label) =>
        project.bahasa.includes(label)
      );
      const toolMatch = selectedTool.some((label) =>
        project.tools.includes(label)
      );

      return bahasaMatch || toolMatch;
    }
  });

  return (
    <>
      {/* Category Selection */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "web"
              ? "bg-blue-500 text-white"
              : "bg-zinc-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setSelectedCategory("web")}
        >
          Website
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "design"
              ? "bg-blue-500 text-white"
              : "bg-zinc-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setSelectedCategory("design")}
        >
          Design
        </button>
      </div>

      {/* Filter Tags */}
      <div
        className={`bg-zinc-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm lg:max-w-[800px] md:max-w-[600px] max-w-[430px] m-auto rounded-xl items-center mb-4
        ${selectedBahasa.length === 0 && selectedTool.length === 0 ? "hidden" : ""}`}
      >
        <div className="justify-between flex-row flex items-center p-2">
          <div className="flex flex-wrap gap-2">
            {selectedBahasa.map((role, index) => (
              <ol className="flex flex-row" key={role}>
                <div className="flex-row flex space-x-2 bg-violet-200 text-xs px-2.5 text-violet-600 dark:bg-violet-600 dark:text-violet-100 rounded-l-full">
                  <span>{role}</span>
                </div>
                <span
                  className="cursor-pointer flex bg-violet-200 text-xs text-violet-600 dark:bg-violet-600 dark:text-violet-100 hover:bg-violet-300 hover:dark:bg-violet-500 rounded-r-full"
                  onClick={() => {
                    const newRole = [...selectedBahasa];
                    newRole.splice(index, 1);
                    setSelectedBahasa(newRole);
                  }}
                >
                  <XCircleIcon className="h-4 w-4" />
                </span>
              </ol>
            ))}

            {selectedTool.map((tooll, index) => (
              <ol className="flex flex-row" key={tooll}>
                <div className="flex-row flex space-x-2 bg-green-200 text-xs px-2.5 text-green-600 dark:bg-green-600 dark:text-green-100 rounded-l-full">
                  <span>{tooll}</span>
                </div>
                <span
                  className="cursor-pointer flex bg-green-200 text-xs text-green-600 dark:bg-green-600 dark:text-green-100 hover:bg-green-300 hover:dark:bg-green-500 rounded-r-full"
                  onClick={() => {
                    const newRole = [...selectedTool];
                    newRole.splice(index, 1);
                    setSelectedTool(newRole);
                  }}
                >
                  <XCircleIcon className="h-4 w-4" />
                </span>
              </ol>
            ))}
          </div>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => {
              setSelectedBahasa([]);
              setSelectedTool([]);
            }}
          >
            Clear
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-zinc-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm lg:max-w-[90%] md:max-w-[600px] max-w-[430px] m-auto rounded-xl items-center grid lg:grid-cols-2 gap-4 p-10">
        {filteredProjects.map((project) => (
          <article
            className="lg:max-w-[400] m-auto rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm hover:-translate-y-2 focus:-translate-y-2 dark:shadow-gray-700/25"
            key={project.id}
          >
            <div className="rounded-[10px] bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-6">
              <Image
                alt=""
                src={project.foto}
                className="h-56 w-full object-cover mb-2"
                layout="responsive"
                width={400}
                height={224}
              />
              <time
                dateTime={project.tanggal}
                className="animate__animated animate__bounce block text-xs text-gray-500 dark:text-gray-400"
              >
                {project.tanggal}
              </time>

              <span className="animate__animated animate__bounce mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                {project.judul}
              </span>
              <p className="text-gray-500 dark:text-gray-400 md:mt-4">
                {project.deskripsi}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {project.bahasa.map((bhsa) => (
                  <span
                    className="animate__animated animate__jackInTheBox cursor-pointer whitespace-nowrap rounded-full bg-violet-200 px-2.5 py-0.5 text-xs text-violet-600 dark:bg-violet-600 dark:text-violet-100 hover:bg-violet-300 hover:dark:bg-violet-500"
                    key={bhsa}
                    onClick={() => setSelectedBahasa([...selectedBahasa, bhsa])}
                  >
                    {bhsa}
                  </span>
                ))}

                {project.tools.map((tool) => (
                  <span
                    className="animate__animated animate__jackInTheBox cursor-pointer whitespace-nowrap rounded-full bg-green-200 px-2.5 py-0.5 text-xs text-green-600 dark:bg-green-600 dark:text-green-100 hover:bg-green-300 hover:dark:bg-green-500"
                    key={tool}
                    onClick={() => setSelectedTool([...selectedTool, tool])}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default CardProjects;