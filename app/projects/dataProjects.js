import Foto1 from "../../public/project1/image1.jpg";
import Foto2 from "../../public/project2/image1.jpg";
import Foto3 from "../../public/project3/image2.jpg";
import Foto4 from "../../public/project4/image1.jpg";
import Foto5 from "../../public/project5/image1.jpg";
import Foto6 from "../../public/project6/image1.png";
import Foto7 from "../../public/project6/image2.png";
import Foto8 from "../../public/project6/image3.jpg";
import Foto9 from "../../public/project6/image4.png";
import Foto10 from "../../public/project6/image5.png";
import Foto11 from "../../public/project6/image6.png";
import React from "react";
import Image from "next/image";

const Projects = [
  {
    id: 1,
    category:"web",
    judul: "Sistem Kampus",
    tanggal: "15 Agustus 2023",
    foto: Foto1,
    bahasa: ["HTML", "CSS", "PHP", "JavaScript", "Boostrap"],
    tools: ["Visual Studio Code", "GIT", "GitHub", "MySQL"],
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
    category:"web",
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
    category:"web",
    judul: "Kasir Laundry",
    tanggal: "17 September 2023",
    foto: Foto3,
    bahasa: ["HTML", "CSS", "PHP", "Laravel 10", "Bootstrap"],
    tools: ["Visual Studio Code", "GIT", "GitHub", "MySQL"],
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
    category:"web",
    judul: "Website Pribadi",
    tanggal: "14 Desember 2023",
    foto: Foto4,
    bahasa: ["NextJS 13", "TailwindCSS"],
    tools: ["Visual Studio Code", "GIT", "GitHub", "NPM"],
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
    category:"web",
    judul: "Parallax JS",
    tanggal: "9 April 2023",
    foto: Foto5,
    bahasa: ["HTML", "CSS", "JavaScript"],
    tools: ["Visual Studio Code"],
    deskripsi: (
      <>
        dibuat dengan HTML, CSS, dan JavaScript, dengan sentuhan tambahan dari
        teknologi ParallaxJS untuk memberikan efek visual yang menarik dan
        dinamis.
      </>
    ),
  },
  {
    id: 6,
    category:"design",
    judul: "Hari Natal dan Tahun Baru",
    tanggal: "6 Desember 2024",
    foto: Foto6,
    bahasa: [],
    tools: ["Adobe Photoshop"],
  },
  {
    id: 7,
    category:"design",
    judul: "Pricelist Room Tournament",
    tanggal: "29 Juli 2024",
    foto: Foto7,
    bahasa: [],
    tools: ["Adobe Photoshop"],
  },
  {
    id: 8,
    category:"design",
    judul: "Pricelist Event The Exorcist",
    tanggal: "20 Mei 2024",
    foto: Foto8,
    bahasa: [],
    tools: ["Canva"],
  },
  {
    id: 9,
    category:"design",
    judul: "Pricelist Joki",
    tanggal: "22 Juli 2024",
    foto: Foto9,
    bahasa: [],
    tools: ["Adobe Photoshop"],
  },
  {
    id: 10,
    category:"design",
    judul: "Logo dan Tournament Sugar Lab",
    tanggal: "30 Juli 2024",
    foto: Foto10,
    bahasa: [],
    tools: ["Adobe Photoshop"],
  },
  {
    id: 11,
    category:"design",
    judul: "17 Agustus",
    tanggal: "10 Agustus 2024",
    foto: Foto11,
    bahasa: [],
    tools: ["Adobe Photoshop"],
  },
];

export { Projects };
