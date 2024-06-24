
'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import bg from "../../public/bg.jpg";

export default function Header() {
    const router=useRouter();
    return(
        <header
         className=" text-white h-screen flex flex-col items-center justify-center">
            <Image src={bg} alt="hero" width="500" height="500" className="object-cover h-full w-full absolute top-0 -z-10 opacity-60" />
            <h1 className="text-5xl mb-5 text-balance tracking-tighter max-md:text-3xl">Welcome to Recipe App</h1>
            <button
            onClick={()=>router.push("/recipes")}
             className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4">Explore recipes</button>
        </header>
    )
}