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
        Siskampus merupakan website inovatif yang dirancang dengan paradigma
        pemrograman berorientasi objek (OOP) dalam bahasa pemrograman PHP.
        Dengan fokus pada kemudahan penggunaan dan pengelolaan data yang
        efisien, Siskampus menyediakan berbagai fitur, antara lain sistem login
        yang aman, pendaftaran mahasiswa, pengumuman, dan pengolahan data
        mahasiswa, jurusan, dan mata pelajaran.
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
        Akademik merupakan sebuah aplikasi yang dibuat dengan menggunakan bahasa
        pemrograman Java. Aplikasi ini menawarkan serangkaian fitur penting,
        antara lain sistem login, pengolahan data mahasiswa, data dosen, data
        mata kuliah, data kelas, dan pengelolaan kehadiran. Dengan desain
        sederhana dan fokus pada kemudahan penggunaan, Akademik memberikan
        solusi terintegrasi untuk institusi pendidikan tinggi.
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
        Aplikasi laundry yang dibangun menggunakan framework Laravel,
        menghadirkan solusi terintegrasi untuk pengelolaan laundry modern.
        Dengan fokus pada kemudahan penggunaan dan efisiensi operasional,
        aplikasi ini dilengkapi dengan berbagai fitur, antara lain sistem login
        yang aman, pemrosesan data master, dan data transaksi.
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
        Situs pribadi saya, saya membuat situs web ini untuk menampilkan profil,
        keterampilan, dan proyek saya. Sekaligus tempat saya mencoba teknologi
        baru.
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
        Situs web menakjubkan yang dirancang menggunakan HTML, CSS, dan
        JavaScript, memanfaatkan teknologi ParallaxJS untuk memberikan efek
        visual yang imersif dan dinamis. HTML CSS JavaScript
      </>
    ),
  },
];

export { Projects };
