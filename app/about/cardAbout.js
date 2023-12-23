import Image from "next/image";
import React from "react";

const cardAbout = () => {
  return (
    <div className="lg:flex block justify-between m-auto sm:m-5 space-y-5 lg:space-y-0 xl:space-y-0">
      <div className="animate__animated animate__backInUp bg-zinc-200 mt-0 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm lg:max-w-[800px] md:max-w-[500px] max-w-[430px] m-auto rounded-xl items-center gap-4 p-10">
        <Image
          alt=""
          src="/image2.gif"
          width={300}
          height={300}
          className="w-full h-full object-cover sm:h-full rounded-full border-4 border-blue-300 dark:border-blue-300 pict"
        />
      </div>
      <div className="m-auto mb-5">
        <div className="animate__animated animate__backInRight bg-zinc-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm xl:max-w-[750px] lg:max-w-[380px] md:max-w-[500px] max-w-[430px] m-auto rounded-xl items-center gap-4 p-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            About Me
          </h2>

          <p className="text-gray-500 dark:text-gray-300 md:mt-4 md:block">
            Hai! Saya I Kadek Panji Pramandhita, seorang mahasiswa yang berminat
            di bidang Web Development dan UI/UX Design. Saya merasa sangat
            tertarik dengan bagaimana desain dan pengembangan dapat bersatu
            untuk menciptakan pengalaman digital yang luar biasa bagi pengguna.
            Saya senang belajar dan mencari tahu tentang tren terkini di
            industri ini. Saya juga meningkatkan keterampilan saya dalam bahasa
            pemrograman seperti HTML, CSS, JavaScript, serta aplikasi desain
            seperti Adobe Photoshop dan Figma. Dalam proses pembelajaran, saya
            selalu berusaha untuk menciptakan antarmuka pengguna yang menarik
            dan mudah digunakan, serta fokus pada kualitas kode dan daya tanggap
            yang baik. Saya sangat antusias dengan masa depan Pengembangan Web
            dan Desain UI/UX.
          </p>
        </div>
        <div className="mt-5 animate__animated animate__backInRight bg-zinc-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm xl:max-w-[750px] lg:max-w-[380px] md:max-w-[500px] max-w-[430px] m-auto rounded-xl items-center gap-4 p-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            My Skills
          </h2>
          <div className="block">
            <h4 className="text-xl text-gray-900 mb-2 dark:text-white">
              Tech Stack
            </h4>
            <div className="grid gap-4 grid-cols-6 grid-rows-3">
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  HTML
                </span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e34f26"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>HTML</title>{" "}
                    <g>
                      {" "}
                      <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                      <path
                        fill-rule="nonzero"
                        d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  CSS
                </span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>CSS</title>{" "}
                    <path
                      fill-rule="nonzero"
                      clip-rule="nonzero"
                      d="M3 1.60001C2.86193 1.60001 2.75 1.71193 2.75 1.85001V11.4003C2.75 11.4896 2.79769 11.5722 2.87509 11.6168L7.73381 14.4194C7.80942 14.463 7.90231 14.464 7.97886 14.4221L13.1201 11.6048C13.2002 11.5609 13.25 11.4769 13.25 11.3856V1.85001C13.25 1.71193 13.1381 1.60001 13 1.60001H3ZM1.25 1.85001C1.25 0.883508 2.0335 0.100006 3 0.100006H13C13.9665 0.100006 14.75 0.883509 14.75 1.85001V11.3856C14.75 12.0248 14.4015 12.6131 13.841 12.9203L8.69968 15.7375C8.16383 16.0311 7.51363 16.024 6.98434 15.7187L2.12562 12.9162C1.58382 12.6037 1.25 12.0258 1.25 11.4003V1.85001ZM5 4.35001C5 3.93579 5.33579 3.60001 5.75 3.60001H10.3654C10.7796 3.60001 11.1154 3.93579 11.1154 4.35001V10.4462C11.1154 10.7302 10.9549 10.9899 10.7008 11.117L8.3931 12.2708C8.18196 12.3764 7.93343 12.3764 7.72228 12.2708L5.41459 11.117C5.1605 10.9899 5 10.7302 5 10.4462V9.86924C5 9.45502 5.33579 9.11924 5.75 9.11924C6.16421 9.11924 6.5 9.45502 6.5 9.86924V9.98263L8.05769 10.7615L9.61539 9.98263V8.31154H7C6.58579 8.31154 6.25 7.97576 6.25 7.56154C6.25 7.14733 6.58579 6.81154 7 6.81154H9.61539V5.10001H5.75C5.33579 5.10001 5 4.76422 5 4.35001Z"
                      fill="#0277bd"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  Java Script
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Javascript</title>{" "}
                    <path
                      d="M14 11.25C14 10.2835 14.7835 9.5 15.75 9.5H17.25C17.6642 9.5 18 9.83579 18 10.25C18 10.6642 17.6642 11 17.25 11H15.75C15.6119 11 15.5 11.1119 15.5 11.25V12.75C15.5 12.8881 15.6119 13 15.75 13H16.25C17.2165 13 18 13.7835 18 14.75V16.25C18 17.2165 17.2165 18 16.25 18H14.75C14.3358 18 14 17.6642 14 17.25C14 16.8358 14.3358 16.5 14.75 16.5H16.25C16.3881 16.5 16.5 16.3881 16.5 16.25V14.75C16.5 14.6119 16.3881 14.5 16.25 14.5H15.75C14.7835 14.5 14 13.7165 14 12.75V11.25Z"
                      fill="#d6ba32"
                    ></path>{" "}
                    <path
                      d="M12.75 10.25C12.75 9.83579 12.4142 9.5 12 9.5C11.5858 9.5 11.25 9.83579 11.25 10.25V16.25C11.25 16.3881 11.1381 16.5 11 16.5H9.75C9.33579 16.5 9 16.8358 9 17.25C9 17.6642 9.33579 18 9.75 18H11C11.9665 18 12.75 17.2165 12.75 16.25V10.25Z"
                      fill="#d6ba32"
                    ></path>{" "}
                    <path
                      d="M3 6.25C3 4.45507 4.45507 3 6.25 3H17.75C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25ZM6.25 4.5C5.2835 4.5 4.5 5.2835 4.5 6.25V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5H6.25Z"
                      fill="#d6ba32"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  Java
                </span>
                <svg
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Java</title>{" "}
                    <path
                      d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"
                      fill="#4e7896"
                    />
                    <path
                      d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"
                      fill="#f58219"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  PHP
                </span>
                <svg
                  fill="#747cb3"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>PHP</title>{" "}
                    <path d="M23.205 13.759h-1.178l-0.645 3.309h1.047c0.056 0.004 0.122 0.007 0.188 0.007 0.507 0 0.978-0.149 1.374-0.405l-0.010 0.006c0.371-0.33 0.623-0.786 0.688-1.301l0.001-0.010c0.048-0.138 0.076-0.296 0.076-0.461 0-0.291-0.087-0.562-0.236-0.788l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001zM26.448 15.486c-0.075 0.398-0.208 0.753-0.39 1.076l0.009-0.017c-0.194 0.338-0.427 0.628-0.698 0.876l-0.003 0.002c-0.316 0.302-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.472 0.207-0.048 0-0.095-0.001-0.142-0.002l0.007 0h-1.475l-0.409 2.102h-1.722l1.537-7.905h3.31c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.512 0.933 0.512 1.5 0 0.245-0.036 0.482-0.103 0.705l0.004-0.017zM16.955 18.317l0.679-3.498c0.035-0.095 0.055-0.204 0.055-0.318 0-0.183-0.052-0.354-0.142-0.499l0.002 0.004c-0.195-0.142-0.439-0.228-0.703-0.228-0.055 0-0.109 0.004-0.162 0.011l0.006-0.001h-1.365l-0.88 4.53h-1.709l1.537-7.906h1.708l-0.409 2.102h1.522c0.093-0.010 0.2-0.016 0.309-0.016 0.625 0 1.205 0.193 1.683 0.524l-0.010-0.006c0.257 0.291 0.414 0.676 0.414 1.097 0 0.188-0.031 0.369-0.089 0.538l0.003-0.012-0.715 3.679zM11.926 17.423c-0.316 0.303-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.471 0.207-0.047 0-0.095-0.001-0.142-0.002l0.007 0h-1.476l-0.409 2.101h-1.722l1.537-7.905h3.312c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.511 0.933 0.511 1.5 0 0.246-0.036 0.483-0.103 0.707l0.004-0.017c-0.146 0.774-0.533 1.441-1.079 1.934l-0.003 0.003zM16 8.112c-8.281 0-14.996 3.531-14.996 7.888s6.714 7.889 14.996 7.889 14.996-3.533 14.996-7.889-6.714-7.888-14.996-7.888zM9.764 13.759h-1.18l-0.644 3.309h1.047c0.056 0.004 0.121 0.007 0.187 0.007 0.507 0 0.979-0.149 1.375-0.405l-0.010 0.006c0.371-0.329 0.622-0.786 0.686-1.301l0.001-0.010c0.049-0.138 0.077-0.297 0.077-0.462 0-0.29-0.086-0.561-0.235-0.786l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001z"></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  SQL
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>SQL</title>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.25 6C3.25 4.45831 4.48029 3.26447 6.00774 2.50075C7.58004 1.7146 9.69967 1.25 12 1.25C14.3003 1.25 16.42 1.7146 17.9923 2.50075C19.5197 3.26447 20.75 4.45831 20.75 6V18C20.75 19.5417 19.5197 20.7355 17.9923 21.4992C16.42 22.2854 14.3003 22.75 12 22.75C9.69967 22.75 7.58004 22.2854 6.00774 21.4992C4.48029 20.7355 3.25 19.5417 3.25 18V6ZM4.75 6C4.75 5.33255 5.31057 4.52639 6.67856 3.84239C8.00168 3.18083 9.88205 2.75 12 2.75C14.118 2.75 15.9983 3.18083 17.3214 3.84239C18.6894 4.52639 19.25 5.33255 19.25 6C19.25 6.66745 18.6894 7.47361 17.3214 8.15761C15.9983 8.81917 14.118 9.25 12 9.25C9.88205 9.25 8.00168 8.81917 6.67856 8.15761C5.31057 7.47361 4.75 6.66745 4.75 6ZM4.75 18C4.75 18.6674 5.31057 19.4736 6.67856 20.1576C8.00168 20.8192 9.88205 21.25 12 21.25C14.118 21.25 15.9983 20.8192 17.3214 20.1576C18.6894 19.4736 19.25 18.6674 19.25 18V14.7072C18.8733 15.0077 18.4459 15.2724 17.9923 15.4992C16.42 16.2854 14.3003 16.75 12 16.75C9.69967 16.75 7.58004 16.2854 6.00774 15.4992C5.55414 15.2724 5.12675 15.0077 4.75 14.7072V18ZM19.25 8.70722V12C19.25 12.6674 18.6894 13.4736 17.3214 14.1576C15.9983 14.8192 14.118 15.25 12 15.25C9.88205 15.25 8.00168 14.8192 6.67856 14.1576C5.31057 13.4736 4.75 12.6674 4.75 12V8.70722C5.12675 9.00772 5.55414 9.27245 6.00774 9.49925C7.58004 10.2854 9.69967 10.75 12 10.75C14.3003 10.75 16.42 10.2854 17.9923 9.49925C18.4459 9.27245 18.8733 9.00772 19.25 8.70722Z"
                      fill="#e2ef34"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  Laravel
                </span>
                <svg
                  viewBox="0 -.11376601 49.74245785 51.31690859"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Laravel</title>{" "}
                    <path
                      d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"
                      fill="#ff2d20"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  NextJS
                </span>
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>NextJs</title>{" "}
                    <path
                      d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  Tailwind CSS
                </span>
                <svg
                  fill="#06b6d4"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Tailwind</title>{" "}
                    <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path>{" "}
                  </g>
                </svg>
              </div>

              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  Bootstrap
                </span>
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#563d7c"
                  class="bi bi-bootstrap"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Bootstrap</title>{" "}
                    <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"></path>{" "}
                    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="group/item h-12 w-12 text-bottom flex items-center">
                <span className="absolute group-hover/item:visible z-10 -mb-20 invisible w-auto px-2 m-auto text-center bg-slate-400/80 rounded-md">
                  MySql
                </span>
                <svg
                  fill="#e48e00"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>MySql</title>{" "}
                    <path d="M30.026 15.139c-0.082-0.006-0.177-0.010-0.273-0.010-0.484 0-0.947 0.090-1.373 0.254l0.026-0.009c-0.125 0.050-0.325 0.050-0.342 0.209 0.069 0.066 0.079 0.175 0.137 0.267 0.117 0.198 0.261 0.366 0.429 0.506l0.003 0.003c0.175 0.137 0.35 0.27 0.534 0.387 0.325 0.2 0.694 0.319 1.012 0.52 0.181 0.117 0.366 0.266 0.55 0.391 0.091 0.062 0.15 0.175 0.267 0.215v-0.025c-0.057-0.075-0.075-0.184-0.131-0.267-0.084-0.084-0.167-0.159-0.25-0.241-0.248-0.325-0.535-0.603-0.857-0.835l-0.012-0.008c-0.267-0.182-0.852-0.437-0.962-0.744l-0.016-0.018c0.218-0.031 0.412-0.077 0.599-0.139l-0.024 0.007c0.284-0.075 0.544-0.059 0.837-0.132 0.132-0.034 0.266-0.075 0.4-0.117v-0.075c-0.15-0.15-0.262-0.354-0.417-0.494-0.409-0.36-0.86-0.698-1.335-1.002l-0.045-0.027c-0.262-0.167-0.595-0.275-0.871-0.417-0.1-0.050-0.267-0.075-0.325-0.159-0.13-0.185-0.245-0.397-0.336-0.621l-0.008-0.022q-0.368-0.714-0.684-1.453c-0.144-0.383-0.287-0.697-0.448-1.001l0.023 0.047c-0.786-1.319-1.881-2.379-3.188-3.102l-0.043-0.022c-0.309-0.153-0.668-0.272-1.045-0.339l-0.025-0.004c-0.209-0.010-0.417-0.025-0.625-0.034-0.146-0.094-0.272-0.19-0.39-0.296l0.003 0.003c-0.475-0.3-1.704-0.95-2.054-0.090-0.225 0.542 0.334 1.077 0.527 1.352 0.154 0.183 0.294 0.388 0.415 0.605l0.010 0.020c0.059 0.145 0.075 0.294 0.134 0.445 0.145 0.452 0.292 0.823 0.459 1.182l-0.026-0.062c0.099 0.199 0.202 0.368 0.317 0.528l-0.008-0.012c0.067 0.091 0.182 0.134 0.209 0.284-0.086 0.181-0.153 0.391-0.19 0.61l-0.002 0.014c-0.108 0.332-0.171 0.715-0.171 1.112 0 0.621 0.153 1.206 0.423 1.72l-0.010-0.020c0.134 0.207 0.452 0.667 0.878 0.491 0.375-0.15 0.292-0.625 0.4-1.043 0.025-0.1 0.009-0.166 0.060-0.234v0.019c0.117 0.235 0.235 0.459 0.342 0.694 0.302 0.435 0.661 0.805 1.071 1.11l0.013 0.009c0.2 0.15 0.359 0.41 0.609 0.502v-0.025h-0.019c-0.057-0.062-0.12-0.117-0.189-0.164l-0.004-0.002c-0.155-0.152-0.299-0.316-0.429-0.489l-0.008-0.011c-0.326-0.44-0.636-0.938-0.905-1.461l-0.029-0.061c-0.137-0.262-0.252-0.545-0.362-0.804-0.050-0.1-0.050-0.25-0.134-0.3-0.148 0.166-0.281 0.351-0.392 0.55l-0.008 0.016c-0.128 0.373-0.212 0.804-0.234 1.251l-0 0.011c-0.034 0.009-0.017 0-0.034 0.018-0.267-0.065-0.359-0.342-0.459-0.575-0.136-0.366-0.215-0.79-0.215-1.231 0-0.356 0.051-0.7 0.147-1.025l-0.006 0.026c0.059-0.175 0.309-0.727 0.209-0.895-0.052-0.159-0.217-0.25-0.309-0.379-0.109-0.154-0.209-0.329-0.292-0.514l-0.008-0.020c-0.2-0.467-0.3-0.985-0.517-1.452-0.131-0.244-0.269-0.454-0.424-0.65l0.007 0.009c-0.165-0.191-0.317-0.404-0.449-0.63l-0.011-0.020c-0.041-0.091-0.1-0.242-0.034-0.342 0.012-0.058 0.058-0.103 0.117-0.112l0.001-0c0.11-0.090 0.419 0.027 0.527 0.077 0.317 0.12 0.59 0.261 0.843 0.427l-0.016-0.010c0.117 0.082 0.244 0.241 0.394 0.282h0.175c0.267 0.059 0.569 0.018 0.819 0.091 0.459 0.155 0.856 0.349 1.223 0.587l-0.021-0.013c1.104 0.713 1.988 1.677 2.586 2.816l0.020 0.041c0.1 0.192 0.144 0.369 0.235 0.569 0.175 0.412 0.391 0.829 0.569 1.227 0.169 0.428 0.369 0.798 0.607 1.139l-0.012-0.018c0.125 0.175 0.627 0.266 0.852 0.357 0.237 0.083 0.427 0.162 0.611 0.251l-0.037-0.016c0.287 0.175 0.567 0.375 0.837 0.567 0.137 0.095 0.554 0.304 0.579 0.472zM18.302 22.452c0 0.015 0.001 0.032 0.001 0.049 0 0.558-0.249 1.057-0.643 1.393l-0.003 0.002c-0.432 0.352-0.989 0.566-1.596 0.566-0.047 0-0.094-0.001-0.14-0.004l0.006 0c-0.739-0.010-1.419-0.25-1.976-0.651l0.010 0.007 0.296-0.595c0.429 0.24 0.939 0.389 1.481 0.41l0.006 0c0.027 0.002 0.058 0.003 0.090 0.003 0.332 0 0.641-0.104 0.894-0.281l-0.005 0.003c0.229-0.174 0.375-0.446 0.375-0.752 0-0.006-0-0.011-0-0.017v0.001c0-0.412-0.287-0.762-0.81-1.056-0.485-0.266-1.453-0.821-1.453-0.821-0.478-0.296-0.791-0.817-0.791-1.411 0-0.021 0-0.042 0.001-0.063l-0 0.003c-0.001-0.019-0.001-0.041-0.001-0.063 0-0.515 0.227-0.977 0.586-1.291l0.002-0.002c0.382-0.324 0.881-0.521 1.426-0.521 0.035 0 0.069 0.001 0.103 0.002l-0.005-0c0.009-0 0.020-0 0.031-0 0.639 0 1.234 0.191 1.73 0.52l-0.012-0.007-0.266 0.595c-0.391-0.176-0.847-0.282-1.327-0.287l-0.002-0c-0.024-0.002-0.051-0.003-0.079-0.003-0.28 0-0.538 0.098-0.74 0.262l0.002-0.002c-0.189 0.157-0.309 0.392-0.31 0.655v0c0 0.41 0.292 0.762 0.832 1.062 0.491 0.269 1.483 0.837 1.483 0.837 0.488 0.287 0.811 0.809 0.811 1.407 0 0.018-0 0.037-0.001 0.055l0-0.003zM20.374 22.983c-0.273-0.545-0.432-1.187-0.432-1.866 0-0.107 0.004-0.213 0.012-0.317l-0.001 0.014q0-2.611 1.587-2.612c0.026-0.002 0.057-0.003 0.089-0.003 0.475 0 0.892 0.248 1.129 0.622l0.003 0.005c0.271 0.542 0.43 1.182 0.43 1.858 0 0.104-0.004 0.207-0.011 0.309l0.001-0.014q0 2.632-1.587 2.634c-0.027 0.002-0.058 0.003-0.089 0.003-0.475 0-0.893-0.248-1.13-0.622l-0.003-0.005zM24.488 24.535l-1.27-0.625c0.116-0.097 0.22-0.199 0.316-0.309l0.003-0.003c0.513-0.692 0.821-1.563 0.821-2.505 0-0.109-0.004-0.217-0.012-0.324l0.001 0.014q0-3.43-2.693-3.432c-0.040-0.002-0.087-0.003-0.134-0.003-0.767 0-1.456 0.337-1.925 0.872l-0.002 0.003c-0.511 0.692-0.818 1.562-0.818 2.504 0 0.106 0.004 0.211 0.012 0.315l-0.001-0.014c-0.009 0.101-0.014 0.219-0.014 0.338 0 0.874 0.274 1.684 0.74 2.349l-0.009-0.013c0.449 0.478 1.086 0.776 1.791 0.776 0.066 0 0.131-0.003 0.195-0.008l-0.009 0.001c0.009 0 0.021 0 0.032 0 0.311 0 0.612-0.045 0.897-0.128l-0.022 0.006 1.656 0.965 0.45-0.777zM28.636 24.366h-3.287v-6.91h1.106v6.061h2.181zM13.235 19.268c-0.287 2.084-0.944 3.965-1.905 5.65l0.040-0.077c-0.385 0.741-1.113 1.257-1.968 1.34l-0.010 0.001c-0.259-0.014-0.5-0.076-0.719-0.177l0.012 0.005v-0.617c0.137 0.021 0.295 0.033 0.456 0.033 0.009 0 0.018-0 0.028-0h-0.001c0.016 0.001 0.034 0.001 0.052 0.001 0.289 0 0.554-0.105 0.758-0.28l-0.002 0.001c0.22-0.181 0.361-0.451 0.369-0.755l0-0.001c-0.053-0.438-0.154-0.837-0.299-1.214l0.012 0.034-1.267-3.944h1.137l0.909 2.949c0.162 0.416 0.256 0.898 0.256 1.401 0 0.001 0 0.002 0 0.002v-0c0.482-1.262 0.848-2.734 1.034-4.261l0.009-0.092zM8.215 24.366h-1.158q-0.049-2.761-0.337-5.511h-0.010l-1.762 5.511h-0.881l-1.75-5.511h-0.012q-0.205 2.751-0.244 5.511h-1.056q0.103-3.685 0.512-6.911h1.437l1.668 5.079h0.010l1.683-5.079h1.368q0.454 3.777 0.535 6.911zM21.505 7.879c-0.002 0-0.005-0-0.008-0-0.119 0-0.234 0.015-0.344 0.043l0.010-0.002v0.016h0.017c0.086 0.128 0.174 0.239 0.269 0.343l-0.002-0.002c0.067 0.134 0.125 0.267 0.192 0.4l0.017-0.019c0.109-0.086 0.178-0.218 0.178-0.366 0-0.018-0.001-0.035-0.003-0.053l0 0.002c-0.050-0.059-0.057-0.117-0.1-0.175-0.050-0.084-0.157-0.125-0.225-0.191z"></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardAbout;
