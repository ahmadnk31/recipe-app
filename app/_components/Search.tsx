'use client'


import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";


export default function SearchRecipe(){
    const mealRef=useRef(null);
    const [name,setName]=useState("");
    const [meal,setMeal]=useState([]);
    const getMealName=async()=>{
        const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const data=await res.json();

        if(data.meals===null){
            setMeal([]);
            return;
        }
        if(data.meals){
            setMeal(data.meals);
        }

        console.log(data);
    }
    useEffect(()=>{
        getMealName();
    },[name])
    const handleSearch=(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        getMealName();
        setName("");
    }
    

    return(
        <main className="mx-auto my-4 container w-full">
            <form 
            className="max-sm:mx-4 w-auto flex gap-4"
                onSubmit={handleSearch}
                
            >
                <input
                ref={mealRef}
                    type="text"
                    placeholder="search"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="border p-2 w-full box-border rounded-md shadow-md text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                ></input>
                <input type="submit" value="search" className="bg-orange-500 text-white p-2 rounded-md shadow-md cursor-pointer box-border focus:ring-2 focus:ring-orange-300"/>
            </form>
           
            {
               name&&(
                    <div className="flex flex-col gap-4 mt-4 bg-orange-500">
            {
                 name&& meal.map((meal:any)=>(
                     <Link
                     
                     ref={mealRef}
                     onClick={()=>setName("")}
                      href={{
                         pathname: `/recipes/${meal.strCategory}/${meal.idMeal}`,
                         query: { recipe: meal.strCategory, id: meal.idMeal },
                     }} key={meal.idMeal}> 
                         <div className="p-4 m-4 rounded border-2 border-white flex gap-4">
                         <img src={meal.strMealThumb} className="object-cover rounded h-24"/>
                         <h2 className="text-white text-lg">{meal.strMeal}</h2>
 
                     </div>
                     </Link>
                 ))
            }
            </div>
                )
            }
           
        </main>
    )

}