import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col bg-white items-center justify-between p-24 ${inter.className}`}
      >
        <div class="relative pt-36 ">
          <div class="lg:w-2/3 text-center mx-auto">
            <h1 class="text-gray-900 dark:text-black font-bold text-4xl md:text-6xl xl:text-7xl">
              Shaping a world with{" "}
              <span class="text-primary dark:text-black">reimagination.</span>
            </h1>
            <p class="mt-8 text-gray-700 dark:text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt nam itaque sed eius modi error totam sit illum. Voluptas
              doloribus asperiores quaerat aperiam. Quidem harum omnis beatae
              ipsum soluta!
            </p>
            <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#"
                class="relative flex h-11 w-full items-center justify-center px-5 py-3 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span class="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <section
        className={`flex min-h-screen flex-col bg-white items-center justify-between p-24 pt-0 ${inter.className}`}
      >
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-[80vw] h-[60vh] md:w-[80vw] md:h-[70vh] xl:w-[90vw] xl:h-[90vh]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/POUPZZi_QLU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
