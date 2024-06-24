'use client'

import Link from "next/link";
import useSWR from "swr"
import Image from "next/image"


export default function Recipes(){
    const fetcher = (url:string) => fetch(url).then(res => res.json())
    const {data,error,isLoading}=useSWR("https://www.themealdb.com/api/json/v1/1/categories.php", fetcher);
    console.log(data);
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
    return(
        <main className="container mx-auto my-8 ">
            <Link href="/" className="bg-orange-500 text-white inline-block mb-4 px-4 py-2 rounded-md">
                Back
            </Link>
            <h1 className="mb-4">welcome to recipes page</h1>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
            {
                data.categories.map((category:any)=>(
                    
                   <Link
                   key={category.idCategory}
                    href={{
                    pathname: `/recipes/${category.strCategory}`,
                    query: { recipe: category.strCategory },
                   }}>
                    <div className="p-4 rounded hover:ring-white hover:ring-1 bg-orange-500 flex flex-col gap-4 justify-center">
                    <h2 className="text-white text-lg">{category.strCategory}</h2>
                    <Image alt={category.strMeal} width={1000} height={1000} src={category.strCategoryThumb} className="object-cover rounded"/>
                   </div>
                   </Link>
                ))
            }
            </div>
        </main>
    )
}