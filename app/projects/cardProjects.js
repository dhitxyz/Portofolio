import React, { useState } from "react";
import { Projects } from "./dataProjects";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/solid";
import "animate.css";

const CardProjects = () => {
  const [selectedBahasa, setSelectedBahasa] = useState([]);
  const [selectedTool, setSelectedTool] = useState([]);
  const filteredProjects = Projects.filter((project) => {
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
      {/* Filter */}
      <div
        className={`bg-zinc-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm lg:max-w-[800px] md:max-w-[600px] max-w-[430px] m-auto rounded-xl items-center mb-4
    ${
      selectedBahasa.length === 0 && selectedTool.length === 0 ? "hidden" : ""
    }`}
      >
        <div className="justify-between flex-row flex items-center p-2">
          <div className="flex flex-wrap gap-2">
            {selectedBahasa.map((role, index) => (
              <ol className="flex flex-row" key={role.id}>
                <div className="flex-row flex space-x-2 bg-violet-200 text-xs px-2.5 text-violet-600 dark:bg-violet-600 dark:text-violet-100 rounded-l-full">
                  <span className="">{role}</span>
                </div>

                <span
                  className=" cursor-pointer flex  bg-violet-200 text-xs text-violet-600 dark:bg-violet-600 dark:text-violet-100 hover:bg-violet-300 hover:dark:bg-violet-500 rounded-r-full"
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
              <ol className="flex flex-row" key={tooll.id}>
                <div className="flex-row flex space-x-2 bg-green-200 text-xs px-2.5 text-green-600 dark:bg-green-600 dark:text-green-100 rounded-l-full">
                  <span className="">{tooll}</span>
                </div>

                <span
                  className=" cursor-pointer flex bg-green-200 text-xs text-green-600 dark:bg-green-600 dark:text-green-100 hover:bg-green-300 hover:dark:bg-green-500 rounded-r-full"
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

      {/* End Filter */}
      <div className=" bg-zinc-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm lg:max-w-[90%] md:max-w-[600px] max-w-[430px] m-auto rounded-xl items-center grid lg:grid-cols-2 gap-4 p-10">
        {filteredProjects.map((project) => {
          return (
            <article
              className=" lg:max-w-[400] m-auto rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm hover:-translate-y-2 focus:-translate-y-2 dark:shadow-gray-700/25"
              key={project.id}
            >
              <div className="rounded-[10px] bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-6">
                <Image
                  alt=""
                  src={project.foto}
                  className="h-56 w-full object-cover mb-2"
                  layout="responsive"
                />
                <time
                  dateTime={project.tanggal}
                  className="animate__animated animate__bounce block text-xs text-gray-500 dark:text-gray-400"
                >
                  {project.tanggal}
                </time>

                <span class="animate__animated animate__bounce mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                  {project.judul}
                </span>
                <p className="text-gray-500 dark:text-gray-400 md:mt-4 ">
                  {project.deskripsi}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {project.bahasa.map((bhsa) => {
                    return (
                      <span
                        className="animate__animated animate__jackInTheBox cursor-pointer whitespace-nowrap rounded-full bg-violet-200 px-2.5 py-0.5 text-xs text-violet-600 dark:bg-violet-600 dark:text-violet-100 hover:bg-violet-300 hover:dark:bg-violet-500"
                        key={bhsa}
                        onClick={() =>
                          setSelectedBahasa([...selectedBahasa, bhsa])
                        }
                      >
                        {bhsa}
                      </span>
                    );
                  })}

                  {project.tools.map((tool) => {
                    return (
                      <span
                        className="animate__animated animate__jackInTheBox cursor-pointer whitespace-nowrap rounded-full bg-green-200 px-2.5 py-0.5 text-xs text-green-600 dark:bg-green-600 dark:text-green-100 hover:bg-green-300 hover:dark:bg-green-500"
                        key={tool}
                        onClick={() => setSelectedTool([...selectedTool, tool])}
                      >
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default CardProjects;
