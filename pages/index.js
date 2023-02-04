import Head from "next/head";
import Image from "next/image";
import { Inter, Libre_Barcode_128 } from "@next/font/google";

export default function Home() {
  return (
    <div className="flex h-[44rem] w-screen flex-col items-center justify-start bg-primary">
      <nav className=" box-border flex h-24 w-11/12 max-w-[78.9rem]  flex-row items-center justify-between">
        <img className="w-35" src="./assets/discord_main_logo.svg"></img>
        <ul className="flex flex-row space-x-8 text-white">
          <li className="hover:underline">Download</li>
          <li className="hover:underline">Nitro</li>
          <li className="hover:underline">safety</li>
          <li className="hover:underline">Support</li>

          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Careers</li>
        </ul>
        <button className="h-14 rounded-full bg-white px-8 hover:shadow-xl">
          Open Discord
        </button>
      </nav>

      <section className="grid h-3/5 w-7/12 max-w-[78.9rem] grid-cols-4 grid-rows-3 items-center justify-items-center bg-slate-300">
        <h1 className="col-span-4 text-2xl text-black ">IMAGINE A PLACE</h1>
        <p className="col-span-4 w-4/5 text-center text-2xl text-black">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button className=" col-span-2 m-5 box-border w-full rounded-full bg-white py-5 px-12 text-xl">
          Download for Windows
        </button>
        <button className="col-span-2 w-full rounded-full bg-black py-5 px-9 text-xl text-white">
          Download for Windows
        </button>
      </section>
    </div>
  );
}
