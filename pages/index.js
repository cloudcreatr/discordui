export default function Home() {
  return (
    <div className=" relative box-content flex h-[70vh] w-full flex-col items-center justify-start overflow-hidden bg-primary lg:h-[600px]">
      <nav className=" relative box-border flex h-24 w-11/12 max-w-[78.9rem] flex-row  items-center justify-between py-4">
        <img className="w-35" src="./assets/discord_main_logo.svg"></img>
        <ul className=" hidden flex-row space-x-8 text-white lg:flex">
          <li className="hover:underline">Download</li>
          <li className="hover:underline">Nitro</li>
          <li className="hover:underline">safety</li>
          <li className="hover:underline">Support</li>

          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Careers</li>
        </ul>
        <button
          className="hidden rounded-full bg-white  px-8
        py-3 hover:shadow-xl lg:block"
        >
          Login
        </button>
        <svg
          className="block w-10 stroke-white lg:hidden"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>

      <section className=" z-40 flex w-11/12 max-w-[60.9rem] flex-col content-between justify-between py-12 md:justify-items-center md:py-16">
        <h1 className="col-span-4 text-left text-5xl font-extrabold text-white md:text-7xl ">
          IMAGINE A PLACE...
        </h1>
        <p className=" text-1xl col-span-4 w-4/5 pt-8 text-left font-medium leading-loose text-white lg:text-center">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className=" flex justify-between">
          <button className=" mr-2 rounded-full bg-white py-4 px-11 text-xl md:inline md:w-[50%]">
            Download for Windows
          </button>
          <button className="ml-2 hidden  rounded-full bg-black py-4 px-11 text-xl text-white md:col-span-2 md:block md:w-[50%]">
            Download for Windows
          </button>
        </div>
      </section>
      <div className=" absolute right-0 left-0 bottom-0 top-0  box-content  h-full w-full  min-w-[3000px]">
        <img
          className=" absolute left-1 bottom-0 z-10 -ml-[14rem] w-[600px]  md:max-lg:hidden lg:-ml-[20rem] 2xl:-ml-4"
          src="./assets/left_bg_landing_header.svg"
        ></img>
        <img
          className="absolute bottom-0 z-0 max-sm:hidden "
          src="./assets/center_bg_landing_header.svg"
        ></img>
        <img
          className="absolute right-[1000px] bottom-0 z-10 ml-4 w-[600px] md:max-lg:right-[2000px]"
          src="./assets/right_bg_landing_header.svg"
        ></img>
      </div>
    </div>
  );
}
