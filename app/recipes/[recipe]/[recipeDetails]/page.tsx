'use client'

import Link from "next/link"
import useSWR from "swr"
import Image from "next/image"
import Skeleton from "@/app/_components/Skeleton"
type RecipeDetailsParams = {
    params:{
        recipe:string,
        recipeDetails:string
    }
}


export default function RecipeDetails({
    params:{recipe,recipeDetails}
}:RecipeDetailsParams){
    const fetcher = (url:string) => fetch(url).then(res => res.json())
    const {data,error,isLoading}=useSWR(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeDetails}`, fetcher);
    if (isLoading) return <div>
        <Skeleton/>
    </div>
    if (error) return <div>Error...</div>
    
    return(
        <main className="container mx-auto my-8 h-screen">
            <Link
            href={{
                pathname: `/recipes/${recipe}`,
                query: { recipe: recipe },
            }}
            className="bg-orange-500 text-white inline-block mb-4 px-4 py-2 rounded-md"
            
            >
                Back
            </Link>
            
            {
                data.meals.map((meal:any)=>(
                    <div
                    className="flex gap-8 max-sm:flex-col  max-sm:items-center max-sm:justify-center max-sm:gap-4 max-sm:md:mb-4 max-sm:md:px-4 max-sm:md:py-2 max-sm:md:rounded-md max-sm:md:shadow-md max-sm:md:bg-gray-100 max-sm:md:w-full max-sm:md:h-full max-sm:md:overflow-hidden max-sm:md:gap-4 max-sm:md:grid"
                     key={meal.idMeal}>
                       
                    
                        <Image alt={meal.strMeal} width="1000" height="1000" src={meal.strMealThumb} className="object-cover h-96 "/>
                        
                        <div className="max-sm:mx-6">
                        <h1 className="text-3xl font-semibold mb-2">{meal.strMeal}</h1>
                        <h2 className="text-xl font-semibold">Ingredients</h2>
                        <ul className="list-disc ml-4 text-gray-500 mb-4">
                            {
                                Object.keys(meal).map((key:string)=>{
                                    if(key.includes("strIngredient") && meal[key]){
                                        return <li key={key}>{meal[key]}</li>
                                    }
                                })
                            }
                        </ul>
                        <h2 className="text-xl font-semibold">Instructions</h2>
                        <p className="text-gray-500">{meal.strInstructions}</p>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}