"use client";

import Image from "next/image";
import React from "react";
import { Projects } from "../dataProjects";
import Carousel from "@/app/components/carousel";

const DetailProjects = ({ params }) => {
  const { id } = params;
  const detail = Projects.find((project) => {
    return project.id === parseInt(id);
  });
  const imageCount = 4; // Ganti dengan jumlah gambar proyek yang Anda miliki
  const projectImages = Array.from(
    { length: imageCount },
    (_, i) => `/project${id}/image${i + 1}.jpg`
  );
  if (!detail) {
    return <div>Error: Project not found</div>;
  }
  return (
    <div className="bg lg:max-w-[1440px] lg:h-screen m-auto overflow-hidden bg-zinc-100 dark:bg-zinc-900">
      <section className="lg:grid lg:grid-cols-2 lg:items-center lg:py-16">
        <div className="p-8 md:p-12 lg:px-16 lg:py-14">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              {detail.judul}
            </h2>

            <p className="text-gray-500 dark:text-gray-400 md:mt-4 ">
              {detail.deskripsi}
            </p>
          </div>
        </div>
        <Carousel images={projectImages} />
      </section>
    </div>
  );
};

export default DetailProjects;
