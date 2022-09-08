import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FiInstagram, FiGithub } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Francisco Zhou </title>
      </Head>

      <main className="w-full h-screen flex justify-center items-center">
        <div className="pb-3 flex flex-col border-gray100 border bg-black rounded-md max-w-xs w-3/4 md:w-72">
          <section className="flex flex-col items-center py-3">
            <div className="relative w-28 h-28 rounded-full">
              <Image className="rounded-full" src="/pfp.jpg" objectFit="fill" layout="fill" alt="Profile picture" />
            </div>

            <h4 className="mt-4 text-xl"> Francisco Zhou Liu </h4>

            <p className="text-weak text-base"> Web Developer </p>
          </section>

          <section className="flex flex-col items-center mt-4">
            <Link passHref href="https://www.instagram.com/franciscozhou5/">
              <a target="_blank" className="flex items-center justify-center bg-instagram rounded-md px-2 py-2 w-36">
                <FiInstagram size={22} />

                <span className="ml-2 text-white text-base"> Instagram </span>
              </a>
            </Link>

            <Link passHref href="https://github.com/Francisco5g/">
              <a target="_blank" className="flex items-center justify-center bg-github rounded-md px-2 py-2 w-36 mt-2">
                <FiGithub size={22} />

                <span className="ml-2 text-white text-base"> Github </span>
              </a>
            </Link>
          </section>

          <footer></footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
