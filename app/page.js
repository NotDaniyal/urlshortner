import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-green-200">
      <section className="grid grid-cols-2">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">The best and easy URL Shortner</p>
          <p className="px-36 text-center">This is most straight Forward URL Shortener that help you to make short your URL with
            easy steps
          </p>
          <div className="flex gap-3 justify-start">
          <Link href="/shorten"><button className='bg-red-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-red-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
         </div>
        </div>
        <div className="flex justify-start relative">
          <img src={"/vector.png"} alt="" />
        </div>
      </section>
    </main>
  );
}
