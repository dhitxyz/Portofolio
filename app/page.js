export const metadata = {
  title: "Home | kadekPanjii .",
};

export default function Home() {
  return (
    <>
      <div className="bg flex justify-center h-screen items-center bg-zinc-100 dark:bg-zinc-900">
        <section>
          <div className="mx-auto lg:max-w-lg max-w-sm text-center hover:cursor-default">
            <p class="text-1xl text-gray-900 dark:text-white text-left">
              Hi There<span class="wave">👋 </span>, I'm
            </p>
            <h1 class="animate__animated animate__backInLeft text-4xl font-bold md:text-5xl dark:text-white text-gray-900 text-left">
              Kadek Panjii .
            </h1>

            <h1 className=" animate__animated animate__backInRight text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-blue-300 dark:from-slate-100 dark:to-blue-300 md:text-2xl text-left">
              <span class="border-gray-900 border-r-2 type-skill dark:border-white"></span>
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
