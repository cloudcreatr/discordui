export default function Home() {
  return (
    <div className=" relative box-content flex h-[90vh] w-full flex-col items-center justify-start overflow-hidden bg-primary lg:h-[600px]">
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

      <section className=" z-40 grid w-11/12 max-w-[60.9rem] grid-cols-6 grid-rows-2 gap-4">
        <div className="order-1 col-span-4 col-start-1 lg:col-start-2 lg:text-center ">
          <h1 className=" order-1 col-span-2 text-4xl font-extrabold text-white md:text-6xl ">
            IMAGINE A PLACE...
          </h1>
          <p
            className=" order-2
        col-span-2 col-start-1 row-start-2 mt-3 font-medium leading-loose text-white "
          >
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className=" order-2 col-span-4 row-start-2 flex h-[10rem] w-80 flex-col justify-around lg:col-start-2 lg:h-[5rem] lg:w-auto lg:flex-row lg:justify-center lg:gap-x-4">
          <button className="flex items-center justify-center rounded-full bg-white py-4 lg:px-3 lg:py-9 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download for Windows
          </button>
          <button className=" rounded-full bg-black py-4  text-xl  text-white  lg:px-3 ">
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
          className="absolute right-[1300px] bottom-0 z-10 ml-4 w-[600px] md:max-lg:right-[2000px]"
          src="./assets/right_bg_landing_header.svg"
        ></img>
      </div>
    </div>
  );
}
