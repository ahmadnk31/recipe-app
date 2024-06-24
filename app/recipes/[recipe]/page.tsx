
'use client'

import Link from "next/link"
import useSWR from "swr"
import Image from "next/image"

type Recipe={
    params:{
        recipe:string
    }
}

export default function Recipe({
    params:{recipe}
}:Recipe){
    const fetcher = (url:string) => fetch(url).then(res => res.json())
    const {data,error,isLoading}=useSWR(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe}`, fetcher);
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
    return(
        <main className="container mx-auto my-8">
            <Link
            className="bg-orange-500 text-white inline-block mb-4 px-4 py-2 rounded-md"
            href="/recipes">
            Back
            </Link>
            <h1 className="mb-4">welcome to {recipe} page</h1>
            <div
                className="
                
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
            {
                data.meals.map((meal:any)=>(
                    <Link
                
                    
                     href={{
                        pathname: `/recipes/${recipe}/${meal.idMeal}`,
                        query: { recipe: recipe, id: meal.idMeal },
                    }} key={meal.idMeal}>
                        <div className="p-4 rounded bg-orange-500 flex flex-col gap-4 justify-center">
                        <h2 className="text-white text-lg">{meal.strMeal}</h2>
                        <Image alt={meal.strMeal} src={meal.strMealThumb} className="object-cover rounded"/>
                    </div>
                    </Link>
                ))
            }
            </div>
        </main>
    )
}