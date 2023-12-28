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
    judul: "Sistem Kampus",
    tanggal: "15 Agustus 2023",
    foto: Foto1,
    bahasa: ["HTML", "CSS", "PHP", "JavaScript", "Boostrap"],
    tools: ["GIT", "GitHub", "MySQL"],
    deskripsi: (
      <>
        sebuah website inovatif yang dirancang dengan paradigma pemrograman
        berorientasi objek (OOP) menggunakan bahasa pemrograman PHP. Dengan
        fokus pada kemudahan penggunaan dan pengelolaan data yang efisien,
        Siskampus menyajikan berbagai fitur, termasuk sistem login yang aman,
        pendaftaran mahasiswa, pengumuman, serta pengolahan data mahasiswa,
        jurusan, dan mata pelajaran.
      </>
    ),
  },

  {
    id: 2,
    judul: "Akademik",
    tanggal: "15 Desember 2022",
    foto: Foto2,
    bahasa: ["Java"],
    tools: ["MySQL"],
    deskripsi: (
      <>
        aplikasi yang dikembangkan dengan menggunakan bahasa pemrograman Java.
        Aplikasi ini menyediakan serangkaian fitur penting, seperti sistem
        login, pengolahan data mahasiswa, data dosen, data mata kuliah, data
        kelas, dan manajemen kehadiran. Dengan desain yang sederhana dan fokus
        pada kemudahan penggunaan, Akademik memberikan solusi terintegrasi untuk
        institusi pendidikan tinggi.
      </>
    ),
  },
  {
    id: 3,
    judul: "Kasir Laundry",
    tanggal: "17 September 2023",
    foto: Foto3,
    bahasa: ["HTML", "CSS", "PHP", "Laravel 10", "Bootstrap"],
    tools: ["GIT", "GitHub", "MySQL"],
    deskripsi: (
      <>
        dikembangkan menggunakan framework Laravel memberikan solusi
        terintegrasi untuk pengelolaan laundry modern. Dengan fokus pada
        kemudahan penggunaan dan efisiensi operasional, aplikasi ini dilengkapi
        dengan berbagai fitur, termasuk sistem login yang aman, pemrosesan data
        master, dan data transaksi.
      </>
    ),
  },
  {
    id: 4,
    judul: "Website Pribadi",
    tanggal: "14 Desember 2023",
    foto: Foto4,
    bahasa: ["NextJS 13", "TailwindCSS"],
    tools: ["GIT", "GitHub", "NPM"],
    deskripsi: (
      <>
        diciptakan sebagai wadah untuk menampilkan profil, keterampilan, dan
        proyek-proyek saya. Saya merancang situs web ini tidak hanya sebagai
        representasi diri, tetapi juga sebagai tempat eksperimen untuk mencoba
        teknologi-teknologi baru.
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
        dibuat dengan HTML, CSS, dan JavaScript, dengan sentuhan tambahan dari
        teknologi ParallaxJS untuk memberikan efek visual yang menarik dan
        dinamis.
      </>
    ),
  },
];

export { Projects };
