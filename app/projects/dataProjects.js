import Foto1 from "../../public/project1/image1.jpg";
import Foto2 from "../../public/project2/image1.jpg";
import Foto3 from "../../public/project3/image2.jpg";
import Foto4 from "../../public/project4/image1.jpg";
import Foto5 from "../../public/project5/image1.jpg";
import React from "react";
import Image from "next/image";

const Projects = [
  {
    id: 1,
    judul: "Siskampus",
    tanggal: "15 Agustus 2023",
    foto: Foto1,
    bahasa: ["HTML", "CSS", "PHP", "OOP", "SQL"],
    tools: ["Boostrap", "PhpMyAdmin"],
    deskripsi: (
      <>
        Siskampus is an innovative website designed using the object-oriented
        programming (OOP) paradigm in the PHP programming language. With a focus
        on ease of use and efficient data management, Siskampus provides various
        features, including a secure login system, student registration,
        announcements, and data processing for students, majors, and subjects.
      </>
    ),
  },

  {
    id: 2,
    judul: "Akademik",
    tanggal: "15 Desember 2022",
    foto: Foto2,
    bahasa: ["Java", "GUI", "SQL"],
    tools: ["Netbeans", "PhpMyAdmin"],
    deskripsi: (
      <>
        Academic is a application, which are made using the Java programming
        language. This application offers a series of important features,
        including a login system, processing student data, lecturer data, course
        data, class data, and attendance management. With a simple design and
        focus on easy use, Akademik provides integrated solutions for higher
        education institutions.
      </>
    ),
  },
  {
    id: 3,
    judul: "Laundry",
    tanggal: "17 September 2023",
    foto: Foto3,
    bahasa: ["HTML", "CSS", "PHP", "SQL"],
    tools: ["Laravel 10", "Bootstrap", "PhpMyAdmin"],
    deskripsi: (
      <>
        Laundry application built using the Laravel framework, presenting an
        integrated solution for modern laundry management. With a focus on ease
        of use and operational efficiency, this application is equipped with
        various features, including a secure login system, master data
        processing and transaction data.
      </>
    ),
  },
  {
    id: 4,
    judul: "Personal Website",
    tanggal: "14 Desember 2023",
    foto: Foto4,
    bahasa: ["HTML", "CSS", "JavaScript"],
    tools: ["TailwindCSS", "NextJS"],
    deskripsi: (
      <>
        My personal website, I created this website to display my profile,
        skills and projects. As well as my place to try new technology.
      </>
    ),
  },
  {
    id: 5,
    judul: "Parallax JS",
    tanggal: "9 April 2023",
    foto: Foto5,
    bahasa: ["HTML", "CSS", "JavaScript"],
    tools: [],
    deskripsi: (
      <>
        A stunning website designed using HTML, CSS, and JavaScript, utilizing
        ParallaxJS technology to provide immersive and dynamic visual effects.
      </>
    ),
  },
];

export { Projects };
