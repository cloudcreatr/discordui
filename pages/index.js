export default function Home() {
  return (
    <div className=" relative flex h-[70vh] w-screen flex-col items-center justify-start bg-primary">
      <nav className="  box-border flex h-24 w-11/12 max-w-[78.9rem] flex-row  items-center justify-between py-4">
        <img className="w-35" src="./assets/discord_main_logo.svg"></img>
        <ul className="flex flex-row space-x-8 text-white">
          <li className="hover:underline">Download</li>
          <li className="hover:underline">Nitro</li>
          <li className="hover:underline">safety</li>
          <li className="hover:underline">Support</li>

          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Careers</li>
        </ul>
        <button
          className="rounded-full bg-white px-8  py-3
        hover:shadow-xl"
        >
          Login
        </button>
      </nav>

      <section className=" z-40 grid w-11/12 max-w-[60.9rem] grid-cols-4 grid-rows-3 items-center justify-items-center py-16">
        <h1 className="col-span-4 text-7xl font-extrabold text-white ">
          IMAGINE A PLACE...
        </h1>
        <p className=" text-1xl col-span-4 w-4/5 pt-8 text-center font-medium leading-loose text-white">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button className=" col-span-2 mr-2  justify-self-end rounded-full bg-white py-4 px-11 text-xl">
          Download for Windows
        </button>
        <button className="col-span-2 ml-2  justify-self-start rounded-full bg-black py-4 px-11 text-xl text-white">
          Download for Windows
        </button>
      </section>

      <div className=" absolute top-0  left-0 z-10 h-[70vh] w-full ">
        <img
          className="absolute left-0 bottom-0 z-20 w-1/5"
          src="./assets/left_bg_landing_header.svg"
        ></img>
        <img
          className="absolute bottom-0 z-10 w-[1000px] "
          src="./assets/center_bg_landing_header.svg"
        ></img>
        <img
          className="absolute right-0 bottom-0 z-20 w-1/5"
          src="./assets/right_bg_landing_header.svg"
        ></img>
      </div>
    </div>
  );
}
