export default function Home() {
  return (
    <div className=" grid grid-cols-4 items-start justify-items-stretch gap-4 p-20 ">
      <div className="  col-span-2 row-start-3 rounded-md bg-slate-500 p-5 text-xl text-white">
        <div className="h-[100px] w-[100px] rounded-lg bg-zinc-900"></div>
      </div>
      <div className=" order-3 col-span-2 rounded-md bg-yellow-500 p-5 text-xl text-white">
        <div className="h-[200px] w-[100px] rounded-lg bg-zinc-900"></div>
      </div>
      <div className=" order-2 col-span-2 rounded-md bg-blue-500 p-5 text-xl text-white">
        <div className="h-[100px] w-[100px] rounded-lg bg-zinc-900"></div>
      </div>
      <div className=" order-1 col-span-1 rounded-md bg-red-500 p-5 text-xl text-white">
        <div className="h-[100px] w-[100px] rounded-lg bg-zinc-900"></div>
      </div>
      <div className="  col-span-2 row-start-3 rounded-md bg-green-500 p-5 text-xl text-white">
        <div className="h-[100px] w-[100px] rounded-lg bg-zinc-900"></div>
      </div>
    </div>
  );
}
