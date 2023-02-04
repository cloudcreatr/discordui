import Head from 'next/head'
import Image from 'next/image'
import { Inter, Libre_Barcode_128 } from '@next/font/google'


export default function Home() {
  return (
    <div className="w-screen h-[44rem] bg-primary flex flex-col justify-start items-center">
   <nav className=" box-border flex flex-row max-w-[78.9rem] w-11/12  h-24 justify-between items-center">
    <img className="w-35" src="./assets/discord_main_logo.svg"></img>
    <ul className="text-white flex flex-row space-x-8">
        <li className="hover:underline">Download</li>
        <li className="hover:underline">Nitro</li>
        <li className="hover:underline">safety</li>
        <li className="hover:underline">Support</li>
        <li className="hover:underline">Blog</li>
        <li className="hover:underline">Careers</li>
    </ul>
    <button className="bg-white rounded-full h-14 hover:shadow-xl px-8">Open Discord</button>
   </nav>

   <section className='grid bg-slate-300 max-w-[78.9rem] w-7/12 h-3/5 grid-cols-4 grid-rows-3 justify-items-center items-center'>
 <h1 className='text-black text-2xl col-span-4 '>IMAGINE A PLACE</h1>
 <p className='text-black text-2xl col-span-4 text-center w-4/5'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
   <button className=' w-full bg-white text-xl py-5 px-12 rounded-full col-span-2 m-5 box-border'>Download for Windows</button>
   <button className='bg-black text-xl text-white py-5 px-9 w-full rounded-full col-span-2'>Download for Windows</button>
   </section>
    </div>
  )
}