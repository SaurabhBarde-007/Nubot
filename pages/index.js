import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/homebg.module.css";
import { motion } from "framer-motion";

import { buttonAnim, fadeIn } from "../motion";
import Parallax from "@/components/Parallax";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const soon = true;
  return (
    <>
      {soon ? (
        <>
          <ComingSoon />
        </>
      ) : (
        <>
          <main
            className={`flex flex-col bg-white items-center justify-between p-24 ${styles["bg-image"]}`}
          >
            <div class="relative pt-36 ">
              <div class="lg:w-2/3 text-center mx-auto">
                <motion.h1
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  class="text-gray-900 dark:text-black font-bold text-4xl md:text-6xl xl:text-7xl"
                >
                  Shaping a world with{" "}
                  <span class="text-primary dark:text-black">
                    reimagination.
                  </span>
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  whileInView="visible"
                  initial="hidden"
                  transition={{ duration: 0.4, delay: 0.45 }}
                  viewport={{ once: true }}
                  class="mt-8 text-gray-700 dark:text-black"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  incidunt nam itaque sed eius modi error totam sit illum.
                  Voluptas doloribus asperiores quaerat aperiam. Quidem harum
                  omnis beatae ipsum soluta!
                </motion.p>
                <motion.div
                  variants={buttonAnim}
                  whileInView="visible"
                  initial="hidden"
                  transition={{ duration: 0.4, delay: 0 }}
                  viewport={{ once: true }}
                  class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6"
                >
                  <a
                    href="#"
                    class="relative flex h-11 w-full items-center justify-center px-5 py-3 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                  >
                    <span class="relative text-base font-semibold text-primary dark:text-white">
                      Learn more
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </main>
          <Parallax>
            <section
              className={`flex flex-col bg-white items-center justify-between p-24 pt-0 ${inter.className}`}
            >
              <div className="w-screen flex pt-10 justify-center items-center">
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
          </Parallax>
        </>
      )}
    </>
  );
}
