
'use client'
import { useRouter } from "next/navigation";

export default function Header() {
    const router=useRouter();
    return(
        <header className="bg-gray-800 text-white p-4 h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl">Welcome to Recipe App</h1>
            <button
            onClick={()=>router.push("/recipes")}
             className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4">Explore recipes</button>
        </header>
    )
}